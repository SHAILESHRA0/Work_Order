import { db } from '../db/db.js';

export const workOrderController = {
    async create(req, res) {
        try {
            const { orderNo, description, priority, dueDate, vehicle, tasks, parts, tools, assignedToId } = req.body;

            // Check if order number exists
            const existingOrder = await db.workOrder.findUnique({
                where: { orderNo }
            });

            if (existingOrder) {
                return res.status(400).json({ error: 'Order number already exists' });
            }

            const workOrder = await db.workOrder.create({
                data: {
                    orderNo,
                    description,
                    priority,
                    dueDate: dueDate ? new Date(dueDate) : null,
                    approvalStatus: 'PENDING',
                    createdById: req.user.id,
                    assignedToId: assignedToId || null,
                    vehicle: vehicle ? {
                        create: vehicle
                    } : undefined,
                    tasks: tasks ? {
                        create: tasks
                    } : undefined,
                    parts: parts ? {
                        create: parts.map(name => ({ name }))
                    } : undefined,
                    tools: tools ? {
                        create: tools.map(name => ({ name }))
                    } : undefined,
                },
                include: {
                    vehicle: true,
                    tasks: true,
                    parts: true,
                    tools: true,
                    assignedTo: true,
                    creator: true
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
                    tools: true,
                    assignedTo: true,
                    creator: true,
                    approvedBy: true,
                    clearedBy: true
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
                    creator: true,
                    approvedBy: true,
                    clearedBy: true
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
                    approvalStatus: 'APPROVED',
                    approvedById: req.user.id,
                    approvedAt: new Date()
                },
                include: {
                    approvedBy: true
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
                    approvalStatus: 'CLEARED',
                    clearedById: req.user.id,
                    clearedAt: new Date(),
                    status: 'Completed'
                },
                include: {
                    clearedBy: true
                }
            });
            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
