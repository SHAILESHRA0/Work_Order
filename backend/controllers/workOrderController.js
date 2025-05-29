import { db as prisma } from '../db/db.js';
import { WORK_ORDER_STATUS } from '../models/WorkOrder.js';

export const workOrderController = {
    async create(req, res) {
        const maxRetries = 3;
        let attempt = 0;

        while (attempt < maxRetries) {
            try {
                const {
                    title,
                    description,
                    department,
                    orderNumber,
                    priority,
                    startDate,
                    dueDate,
                    vehicle,
                    assignedToId,
                    tasks
                } = req.body;

                // Validate required fields
                if (!title || !description || !department || !startDate || !dueDate) {
                    return res.status(400).json({
                        success: false,
                        error: 'Missing required fields'
                    });
                }

                // Create work order with vehicle in a transaction
                const workOrder = await prisma.$transaction(async (tx) => {
                    let vehicleId = null;

                    if (vehicle?.licensePlate) {
                        const existingVehicle = await tx.vehicle.findUnique({
                            where: { licensePlate: vehicle.licensePlate }
                        });

                        if (existingVehicle) {
                            vehicleId = existingVehicle.id;
                        } else {
                            const newVehicle = await tx.vehicle.create({
                                data: {
                                    model: vehicle.model,
                                    licensePlate: vehicle.licensePlate
                                }
                            });
                            vehicleId = newVehicle.id;
                        }
                    }

                    return await tx.workOrder.create({
                        data: {
                            title,
                            description,
                            department,
                            orderNumber,
                            priority: priority || 'MEDIUM',
                            status: 'PENDING',
                            startDate: new Date(startDate),
                            dueDate: new Date(dueDate),
                            createdById: req.user.id,
                            assignedToId,
                            vehicleId, // Use the vehicle ID reference instead of nested create
                            tasks: tasks ? {
                                createMany: {
                                    data: tasks.map(task => ({
                                        description: task.title,
                                        status: 'PENDING',
                                        priority: priority || 'MEDIUM'
                                    }))
                                }
                            } : undefined
                        },
                        include: {
                            vehicle: true,
                            tasks: true,
                            assignedTo: {
                                select: {
                                    id: true,
                                    name: true
                                }
                            },
                            createdBy: {
                                select: {
                                    id: true,
                                    name: true
                                }
                            }
                        }
                    });
                }, {
                    maxWait: 5000, // 5s timeout
                    timeout: 10000, // 10s timeout
                    isolationLevel: prisma.TransactionIsolationLevel.Serializable // Highest isolation level
                });

                // Send success response with complete work order data
                return res.status(201).json({
                    success: true,
                    message: 'Work order created successfully',
                    data: workOrder
                });

            } catch (error) {
                attempt++;
                if (error.code === 'P2034' && attempt < maxRetries) {
                    // Wait for a random time before retrying to prevent deadlocks
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
                    continue;
                }

                console.error('Work order creation error:', error);
                return res.status(500).json({
                    success: false,
                    error: 'Failed to create work order',
                    details: attempt >= maxRetries ? 'Maximum retries exceeded' : error.message
                });
            }
        }
    },

    async getAll(req, res) {
        try {
            const workOrders = await prisma.workOrder.findMany({
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    vehicle: {
                        select: {
                            model: true,
                            licensePlate: true
                        }
                    },
                    tasks: true,
                    assignedTo: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    createdBy: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });

            return res.status(200).json({
                success: true,
                data: workOrders.map(wo => ({
                    id: wo.id,
                    orderNumber: wo.orderNumber,
                    title: wo.title,
                    description: wo.description,
                    department: wo.department,
                    priority: wo.priority,
                    status: wo.status,
                    startDate: wo.startDate,
                    dueDate: wo.dueDate,
                    vehicle: wo.vehicle,
                    assignedTo: wo.assignedTo,
                    createdBy: wo.createdBy
                })),
                message: 'Work orders fetched successfully'
            });

        } catch (error) {
            console.error('Error fetching work orders:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to fetch work orders',
                message: error.message
            });
        }
    },

    async getByOrderNo(req, res) {
        try {
            const { orderNo } = req.params;
            const existingOrder = await prisma.workOrder.findFirst({
                where: {
                    orderNumber: orderNo
                }
            });

            if (!existingOrder) {
                return res.status(404).json({
                    success: true,
                    exists: false,
                    message: 'Work order number is available'
                });
            }

            return res.status(200).json({
                success: true,
                exists: true,
                message: 'Work order found',
                workOrder: existingOrder
            });

        } catch (error) {
            console.error('Error checking work order:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to check work order',
                details: error.message
            });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { isValid, errors } = validateWorkOrder(req.body);

            if (!isValid) {
                return res.status(400).json({ errors });
            }

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: req.body
            });

            res.json(workOrder);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await prisma.workOrder.delete({
                where: { id }
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createSampleWorkOrder(req, res) {
        try {
            const workOrder = await prisma.workOrder.create({
                data: {
                    title: "Engine Oil Change and Maintenance",
                    description: "Regular maintenance including engine oil change, filter replacement, and general inspection",
                    department: "MECHANICAL",
                    orderNumber: "WO-" + Date.now(),
                    priority: "MEDIUM",
                    status: WORK_ORDER_STATUS.PENDING,
                    startDate: new Date(),
                    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                    createdById: req.user.id,
                    assignedToId: "sham_tech_id", // Replace with actual technician ID
                    estimatedHours: 4,
                    vehicle: {
                        create: {
                            model: "Toyota Camry",
                            licensePlate: "ABC-123",
                            repairType: "Maintenance"
                        }
                    },
                    tasks: {
                        createMany: {
                            data: [
                                {
                                    title: "Change engine oil",
                                    status: "PENDING",
                                    estimatedHours: 1
                                },
                                {
                                    title: "Replace oil filter",
                                    status: "PENDING",
                                    estimatedHours: 0.5
                                },
                                {
                                    title: "Inspect brake system",
                                    status: "PENDING",
                                    estimatedHours: 1
                                }
                            ]
                        }
                    },
                    maintenanceDetails: {
                        create: {
                            requiredParts: ["Engine Oil", "Oil Filter", "Air Filter"],
                            safetyTools: ["Gloves", "Safety Goggles"],
                            procedures: ["Drain old oil", "Replace filter", "Add new oil", "Check levels"]
                        }
                    }
                },
                include: {
                    vehicle: true,
                    tasks: true,
                    assignedTo: true,
                    maintenanceDetails: true
                }
            });

            res.status(201).json(workOrder);
        } catch (error) {
            console.error('Error creating sample work order:', error);
            res.status(500).json({
                error: 'Failed to create sample work order',
                details: error.message
            });
        }
    },

    async getPending(req, res) {
        try {
            const pendingOrders = await prisma.workOrder.findMany({
                where: {
                    status: 'PENDING'
                },
                include: {
                    vehicle: {
                        select: {
                            model: true,
                            licensePlate: true
                        }
                    },
                    assignedTo: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    createdBy: {
                        select: {
                            name: true
                        }
                    },
                    tasks: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            return res.status(200).json({
                success: true,
                data: pendingOrders
            });

        } catch (error) {
            console.error('Error fetching pending orders:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to fetch pending orders',
                details: error.message
            });
        }
    },

    async getPendingOrders(req, res) {
        try {
            const pendingOrders = await prisma.workOrder.findMany({
                where: {
                    status: 'PENDING'
                },
                include: {
                    vehicle: {
                        select: {
                            model: true,
                            licensePlate: true
                        }
                    },
                    assignedTo: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            return res.status(200).json({
                success: true,
                data: pendingOrders
            });

        } catch (error) {
            console.error('Error fetching pending orders:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to fetch pending orders',
                details: error.message
            });
        }
    },

    async getPendingApproval(req, res) {
        try {
            const pendingOrders = await prisma.workOrder.findMany({
                where: {
                    status: 'PENDING'
                },
                include: {
                    vehicle: true,
                    engineer: {
                        select: {
                            id: true,
                            name: true,
                            department: true
                        }
                    },
                    tasks: {
                        select: {
                            title: true,
                            priority: true,
                            status: true
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            return res.status(200).json({
                success: true,
                data: pendingOrders
            });
        } catch (error) {
            console.error('Error fetching pending approval orders:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to fetch pending approval orders',
                details: error.message
            });
        }
    },

    async approveWorkOrder(req, res) {
        try {
            const { id } = req.params;
            const { technicianId, comments } = req.body;

            if (!technicianId) {
                return res.status(400).json({
                    success: false,
                    error: 'Technician ID is required'
                });
            }

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: 'APPROVED',
                    assignedToId: technicianId,
                    updatedAt: new Date(),
                    comments: {
                        create: {
                            content: 'Work order approved',
                            authorId: req.user.id
                        }
                    }
                },
                include: {
                    assignedTo: true,
                    comments: true
                }
            });

            return res.json({
                success: true,
                data: workOrder
            });

        } catch (error) {
            console.error('Error approving work order:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to approve work order'
            });
        }
    },

    async rejectWorkOrder(req, res) {
        try {
            const { id } = req.params;
            const { comments } = req.body;

            if (!comments?.trim()) {
                return res.status(400).json({
                    success: false,
                    error: 'Rejection reason is required'
                });
            }

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: {
                    status: 'REJECTED',
                    updatedAt: new Date(),
                    comments: {
                        create: {
                            content: comments,
                            authorId: req.user.id
                        }
                    }
                },
                include: {
                    comments: true
                }
            });

            return res.json({
                success: true,
                data: workOrder
            });

        } catch (error) {
            console.error('Error rejecting work order:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to reject work order'
            });
        }
    },

    async getNonPendingOrders(req, res) {
        try {
            const workOrders = await prisma.workOrder.findMany({
                where: {
                    NOT: {
                        status: 'PENDING'
                    }
                },
                include: {
                    vehicle: {
                        select: {
                            model: true,
                            licensePlate: true
                        }
                    },
                    assignedTo: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    createdBy: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    tasks: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            return res.status(200).json({
                success: true,
                data: workOrders,
                message: 'Non-pending work orders fetched successfully'
            });

        } catch (error) {
            console.error('Error fetching non-pending work orders:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to fetch non-pending work orders',
                details: error.message
            });
        }
    }
};
