import express from 'express';
import { db } from '../db/db.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all work orders assigned to the technician
router.get('/workorders', auth, async (req, res) => {
    try {
        const workOrders = await db.workOrder.findMany({
            where: { 
                assignedToId: req.user.id 
            },
            include: {
                creator: {
                    select: {
                        name: true,
                        role: true
                    }
                }
            }
        });
        
        res.json(workOrders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update work order status
router.put('/workorders/:id/status', auth, async (req, res) => {
    try {
        const { status, issueDescription } = req.body;
        
        const workOrder = await db.workOrder.findUnique({
            where: { id: req.params.id }
        });
        
        if (!workOrder) {
            return res.status(404).json({ message: 'Work order not found' });
        }
        
        if (workOrder.assignedToId !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        
        const updatedWorkOrder = await db.workOrder.update({
            where: { id: req.params.id },
            data: {
                status,
                tasks: issueDescription ? {
                    create: {
                        description: issueDescription,
                        createdById: req.user.id,
                        status: 'issue_reported'
                    }
                } : undefined
            }
        });
        
        res.json(updatedWorkOrder);
    } catch (error) {
        console.error('Error updating work order:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export { router as technicianRouter };
