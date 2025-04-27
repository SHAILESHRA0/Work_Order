import { db } from '../db/db.js';

export const managerController = {
    async getWorkOrders(req, res) {
        try {
            const workOrders = await db.workOrder.findMany({
                include: {
                    vehicle: true,
                    engineer: true,
                    tasks: true
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
            const workOrder = await db.workOrder.update({
                where: { id },
                data: {
                    status: 'approved',
                    approvedById: req.user.id,
                    approvedAt: new Date()
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
            const workOrder = await db.workOrder.update({
                where: { id },
                data: {
                    status: 'cleared',
                    clearedById: req.user.id,
                    clearedAt: new Date()
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
