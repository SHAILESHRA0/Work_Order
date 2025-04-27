import express from 'express';
import { db } from '../db/db.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all tasks assigned to supervisor's department
router.get('/tasks', auth, async (req, res) => {
    try {
        const tasks = await db.task.findMany({
            include: {
                assignedTechnician: {
                    select: { name: true }
                },
                assignedBy: {
                    select: { name: true }
                }
            }
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get available technicians
router.get('/technicians', auth, async (req, res) => {
    try {
        const technicians = await db.user.findMany({
            where: {
                role: 'technician',
                available: true
            }
        });
        res.json(technicians);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Assign task to technician
router.put('/assign/:taskId', auth, async (req, res) => {
    try {
        const task = await db.task.update({
            where: { taskId: req.params.taskId },
            data: {
                assignedTechnician: req.body.technicianId,
                status: 'Assigned',
                assignedAt: new Date()
            },
            include: {
                assignedTechnician: true
            }
        });

        // Update technician availability
        await db.user.update({
            where: { id: req.body.technicianId },
            data: { available: false }
        });

        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get technician progress
router.get('/progress', auth, async (req, res) => {
    try {
        const tasks = await db.task.findMany({
            where: {
                status: { in: ['Assigned', 'In Progress'] }
            },
            include: {
                assignedTechnician: true
            }
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update task status
router.put('/status/:taskId', auth, async (req, res) => {
    try {
        const task = await db.task.update({
            where: { taskId: req.params.taskId },
            data: {
                status: req.body.status,
                progress: req.body.progress
            }
        });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export { router as supervisorRouter };
