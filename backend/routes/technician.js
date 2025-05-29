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

// Update work order status
router.put('/tasks/:id/status', auth, async (req, res) => {
    try {
        const { status, issueDescription } = req.body;

        const task = await db.task.findUnique({
            where: { id: req.params.id }
        });

        if (!task) {
            return res.status(404).json({ message: 'Work order not found' });
        }

        if (task.assignedToId !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const updatedtask= await db.task.update({
            where: { id: req.params.id },
            data: {
                status,
            }
        });

        res.json(updatedtask);
    } catch (error) {
        console.error('Error updating work order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export { router as technicianRouter };
