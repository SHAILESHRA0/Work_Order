import { db } from '../db/db.js';

export const workOrderController = {
    async create(req, res) {
        try {
            const { 
                title, 
                description, 
                department,
                orderNumber,
                priority = 'HIGH',
                status = 'PENDING',
                startDate,
                dueDate,
                vehicle,
                assignedToId 
            } = req.body;

            // Input validation
            if (!title || !description || !department || !orderNumber) {
                return res.status(400).json({
                    success: false,
                    error: 'Required fields missing'
                });
            }

            // Create work order with proper enum handling
            const workOrder = await db.workOrder.create({
                data: {
                    title,
                    description,
                    department,
                    orderNumber,
                    priority: priority?.toUpperCase() || 'HIGH',
                    status: status?.toUpperCase() || 'PENDING',
                    startDate: startDate ? new Date(startDate) : null,
                    dueDate: dueDate ? new Date(dueDate) : null,
                    createdById: req.user.id,
                    assignedToId,
                    vehicle: vehicle ? {
                        create: {
                            model: vehicle.model,
                            licensePlate: vehicle.licensePlate
                        }
                    } : undefined,
                },
                include: {
                    vehicle: true,
                    assignedTo: true,
                    createdBy: true
                }
            });

            res.status(201).json({
                success: true,
                data: workOrder
            });

        } catch (error) {
            console.error("Error creating work order:", error);
            res.status(500).json({
                success: false,
                error: "Failed to create work order",
                details: error.message
            });
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
                    maintenanceDetails: true,
                    scheduling: true,
                    tasks: true,
                    assignedTo: true,
                    createdBy: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            res.json(workOrders);
        } catch (error) {
            console.error("Error fetching work orders:", error);
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
