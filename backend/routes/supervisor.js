const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get all tasks assigned to supervisor's department
router.get('/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate('assignedTechnician', 'name')
            .populate('assignedBy', 'name');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get available technicians
router.get('/technicians', auth, async (req, res) => {
    try {
        const technicians = await User.find({ 
            role: 'technician',
            available: true 
        });
        res.json(technicians);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Assign task to technician
router.put('/assign/:taskId', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { taskId: req.params.taskId },
            {
                assignedTechnician: req.body.technicianId,
                status: 'Assigned',
                assignedAt: new Date()
            },
            { new: true }
        ).populate('assignedTechnician');

        // Update technician availability
        await User.findByIdAndUpdate(req.body.technicianId, {
            available: false
        });

        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get technician progress
router.get('/progress', auth, async (req, res) => {
    try {
        const tasks = await Task.find({
            status: { $in: ['Assigned', 'In Progress'] }
        }).populate('assignedTechnician');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update task status
router.put('/status/:taskId', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { taskId: req.params.taskId },
            {
                status: req.body.status,
                progress: req.body.progress
            },
            { new: true }
        );
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
