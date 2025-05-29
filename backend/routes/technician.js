import express from 'express';
import { db } from '../db/db.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all work orders assigned to the technician
router.get('/workorders', auth, async (req, res) => {
    try {
        const workOrders = await db.workOrder.findMany({
            where: {
                assignedToId: req.user.id,
                status: "APPROVED"
            },
            include: {
                createdBy: {
                    select: {
                        name: true,
                        role: true
                    }
                },
                tasks: true
            }
        });


        workOrders.map(order => {
            order.tasks.map(task => ({

            }))
        }).flat();

        const result = workOrders.map(order => {
            return order.tasks.map(task => ({
                id:task.id,
                workOrderTitle: order.title,
                status: task.status,
                description: task.description,
                dueDate: order.dueDate,
                assignedBy: order.createdBy.name,
                priority: task.priority,
                assignedDate: task.assignedDate,
            }))
        }).flat();

        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
});

// Update task status
router.put('/tasks/:id/status', auth, async (req, res) => {
    try {
        const { status, comments } = req.body;
        const taskId = req.params.id;

        // Start a transaction
        const result = await db.$transaction(async (prisma) => {
            // Update the task
            const task = await prisma.task.update({
                where: { id: taskId },
                data: {
                    status,
                    comments: comments || undefined,
                    updatedAt: new Date(),
                    // Only update completion fields if status is COMPLETED
                    ...(status === 'COMPLETED' ? {
                        actualTime: req.body.actualTime ? parseFloat(req.body.actualTime) : null,
                        completedAt: new Date() // Changed from completedDate to completedAt
                    } : {})
                },
                include: {
                    workOrder: true
                }
            });

            // Check and update work order if all tasks completed
            if (status === 'COMPLETED') {
                const allTasks = await prisma.task.findMany({
                    where: { workOrderId: task.workOrder.id }
                });

                const allCompleted = allTasks.every(t => 
                    t.status === 'COMPLETED' || t.id === taskId
                );

                if (allCompleted) {
                    await prisma.workOrder.update({
                        where: { id: task.workOrder.id },
                        data: {
                            status: 'COMPLETED',
                            completedDate: new Date() // This is correct for WorkOrder model
                        }
                    });
                }
            }

            return task;
        });

        res.json({ success: true, data: result });

    } catch (error) {
        console.error('Error updating task status:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to update task status',
            details: error.message 
        });
    }
});

export { router as technicianRouter };

