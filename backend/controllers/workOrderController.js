import { db } from '../db/db.js';

export const workOrderController = {
    async create(req, res) {
        try {
            const { orderNo } = req.body;
            
            // Check if order number exists
            const existingOrder = await db.workOrder.findUnique({
                where: { orderNo }
            });
            
            if (existingOrder) {
                return res.status(400).json({ error: 'Order number already exists' });
            }
            
            const workOrder = await db.workOrder.create({
                data: {
                    ...req.body,
                    vehicle: {
                        create: req.body.vehicle
                    },
                    tasks: {
                        create: req.body.tasks
                    },
                    parts: {
                        create: req.body.parts.map(name => ({ name }))
                    },
                    tools: {
                        create: req.body.tools.map(name => ({ name }))
                    },
                    approvalStatus: 'Pending',
                    createdById: req.user.id
                },
                include: {
                    vehicle: true,
                    tasks: true,
                    parts: true,
                    tools: true
                }
            });
            
            res.status(201).json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getByOrderNo(req, res) {
        try {
            const { orderNo } = req.params;
            const workOrder = await db.workOrder.findUnique({
                where: { orderNo },
                include: {
                    vehicle: true,
                    tasks: true,
                    parts: true,
                    tools: true
                }
            });
            
            if (!workOrder) {
                return res.status(404).json({ error: 'Work order not found' });
            }
            
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const workOrders = await db.workOrder.findMany({
                include: {
                    vehicle: true,
                    tasks: true,
                    assignedTo: true,
                    createdBy: true
                }
            });
            res.json(workOrders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async approve(req, res) {
        try {
            const { id } = req.params;
            const workOrder = await db.workOrder.update({
                where: { id },
                data: {
                    approvalStatus: 'Approved',
                    approvedById: req.user.id,
                    approvedAt: new Date()
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async clear(req, res) {
        try {
            const { id } = req.params;
            const workOrder = await db.workOrder.update({
                where: { id },
                data: {
                    approvalStatus: 'Cleared',
                    clearedById: req.user.id,
                    clearedAt: new Date(),
                    status: 'Completed'
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
