const { WorkOrder } = require('../models/WorkOrder');

const technicianController = {
    async getAssignedWorkOrders(req, res) {
        try {
            const workOrders = await WorkOrder.find({ 
                assignedToId: req.user.id,
                status: { $nin: ['COMPLETED', 'REJECTED'] }
            }).sort('-createdAt');
            res.json({ success: true, data: workOrders });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateWorkOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, issueDetails } = req.body;
            
            const workOrder = await WorkOrder.findById(id);
            if (!workOrder) {
                return res.status(404).json({ success: false, error: 'Work order not found' });
            }

            workOrder.status = status;
            if (status === 'ISSUE_REPORTED') {
                workOrder.issueDetails = {
                    description: issueDetails,
                    reportedAt: new Date()
                };
            }

            workOrder.statusHistory.push({
                status,
                updatedById: req.user.id,
                details: issueDetails
            });

            await workOrder.save();
            res.json({ success: true, data: workOrder });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateTaskStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, completedAt, actualHours, checklist, comments, resumeDate } = req.body;

            const task = await prisma.task.findUnique({
                where: { id },
                include: {
                    workOrder: true
                }
            });

            if (!task) {
                return res.status(404).json({ success: false, error: 'Task not found' });
            }

            // Basic update data
            const updateData = {
                status,
                updatedAt: new Date()
            };

            // Add specific fields based on status
            switch (status) {
                case 'COMPLETED':
                    updateData.completedAt = new Date(completedAt);
                    updateData.actualHours = actualHours;
                    updateData.checklist = checklist;
                    break;

                case 'ISSUE_REPORTED':
                    updateData.issueDetails = {
                        description: comments,
                        reportedAt: new Date()
                    };
                    break;

                case 'ON_HOLD':
                    updateData.holdDetails = {
                        reason: comments,
                        resumeDate: new Date(resumeDate)
                    };
                    break;
            }

            // Update task in a transaction
            const updatedTask = await prisma.$transaction(async (tx) => {
                const updated = await tx.task.update({
                    where: { id },
                    data: updateData
                });

                // If task is completed, check if all tasks in work order are completed
                if (status === 'COMPLETED') {
                    const allTasks = await tx.task.findMany({
                        where: { workOrderId: task.workOrderId }
                    });

                    const allCompleted = allTasks.every(t => 
                        t.status === 'COMPLETED' || t.id === id
                    );

                    if (allCompleted) {
                        await tx.workOrder.update({
                            where: { id: task.workOrderId },
                            data: {
                                status: 'COMPLETED',
                                completedAt: new Date()
                            }
                        });
                    }
                }

                return updated;
            });

            res.json({ success: true, data: updatedTask });
        } catch (error) {
            console.error('Error updating task status:', error);
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = technicianController;
