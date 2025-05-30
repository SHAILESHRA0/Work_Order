import { prisma } from '../db/index.js';

export const technicianController = {
    async getAssignedWorkOrders(req, res) {
        try {
            // Validate user exists in request
            if (!req.user || !req.user.id) {
                return res.status(401).json({ 
                    success: false, 
                    error: 'User not authenticated or invalid user ID' 
                });
            }

            // Verify database connection
            await prisma.$connect();

            const workOrders = await prisma.workOrder.findMany({
                where: {
                    assignedToId: req.user.id,
                    status: {
                        notIn: ['COMPLETED', 'REJECTED']
                    }
                },
                include: {
                    vehicle: true,
                    tasks: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            // Return empty array if no work orders found
            if (!workOrders) {
                return res.json({
                    success: true,
                    data: []
                });
            }

            return res.json({ success: true, data: workOrders });
        } catch (error) {
            console.error('Error fetching assigned work orders:', error);
            return res.status(500).json({ 
                success: false, 
                error: 'Database connection failed'
            });
        }
    },

    async updateWorkOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, comments, completedDate, actualHours } = req.body;

            const updateData = {
                status,
                statusHistory: {
                    create: {
                        status,
                        updatedById: req.user.id,
                        comments: comments || `Status updated to ${status}`,
                        updatedAt: new Date()
                    }
                }
            };

            // Add completion details if status is COMPLETED
            if (status === 'COMPLETED') {
                updateData.completedDate = completedDate ? new Date(completedDate) : new Date();
                if (actualHours) {
                    updateData.actualHours = parseFloat(actualHours);
                }
                updateData.updatedAt = new Date();
            }

            const workOrder = await prisma.workOrder.update({
                where: { id },
                data: updateData,
                include: {
                    statusHistory: true,
                    assignedTo: true
                }
            });

            return res.json({
                success: true,
                data: workOrder
            });
        } catch (error) {
            console.error('Error updating work order status:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to update work order status',
                details: error.message
            });
        }
    }
};
