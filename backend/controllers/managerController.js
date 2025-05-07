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
            const { comments, technicianId } = req.body;

            if (!technicianId) {
                return res.status(400).json({
                    success: false,
                    error: 'Technician ID is required for approval'
                });
            }

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: WORK_ORDER_STATUS.APPROVED,
                    assignedToId: technicianId,
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

            return res.json({
                success: true,
                message: 'Work order approved successfully',
                data: workOrder
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'Failed to approve work order',
                details: error.message
            });
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

            if (!comments?.trim()) {
                return res.status(400).json({
                    success: false,
                    error: 'Comments are required when rejecting a work order'
                });
            }

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

            return res.json({
                success: true,
                message: 'Work order rejected successfully',
                data: workOrder
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'Failed to reject work order',
                details: error.message
            });
        }
    }
};

module.exports = { managerController };
