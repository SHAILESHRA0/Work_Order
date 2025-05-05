const { prisma } = require('../models/WorkOrder');
const { WORK_ORDER_STATUS } = require('../models/WorkOrder');

const managerController = {
    async getWorkOrders(req, res) {
        try {
            const workOrders = await prisma.workOrder.findMany({
                include: {
                    assignedTo: {
                        select: { name: true }
                    },
                    vehicle: true,
                    tasks: true,
                    maintenanceDetails: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            res.json(workOrders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async approveWorkOrder(req, res) {
        try {
            const { id } = req.params;
            const { comments } = req.body;

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: WORK_ORDER_STATUS.APPROVED,
                    approvalDetails: {
                        approvedById: req.user.id,
                        approvedAt: new Date(),
                        comments
                    },
                    statusHistory: {
                        create: {
                            status: WORK_ORDER_STATUS.APPROVED,
                            updatedById: req.user.id,
                            details: comments || 'Work order approved'
                        }
                    }
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async clearWorkOrder(req, res) {
        try {
            const { id } = req.params;
            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: WORK_ORDER_STATUS.COMPLETED,
                    completedDate: new Date()
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async rejectWorkOrder(req, res) {
        try {
            const { id } = req.params;
            const { comments } = req.body;

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: WORK_ORDER_STATUS.REJECTED,
                    approvalDetails: {
                        rejectedById: req.user.id,
                        rejectedAt: new Date(),
                        comments
                    },
                    statusHistory: {
                        create: {
                            status: WORK_ORDER_STATUS.REJECTED,
                            updatedById: req.user.id,
                            details: comments || 'Work order rejected'
                        }
                    }
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = { managerController };
