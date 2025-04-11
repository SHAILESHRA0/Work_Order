const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const WorkOrder = require('../models/WorkOrder');

// Get all work orders assigned to the technician
router.get('/workorders', auth, async (req, res) => {
    try {
        const workOrders = await WorkOrder.find({ 
            assignedTo: req.user.id 
        }).populate('assignedBy', 'name role');
        
        res.json(workOrders);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Update work order status
router.put('/workorders/:id/status', auth, async (req, res) => {
    try {
        const { status, issueDescription } = req.body;
        const workOrder = await WorkOrder.findById(req.params.id);
        
        if (!workOrder) {
            return res.status(404).json({ msg: 'Work order not found' });
        }
        
        if (workOrder.assignedTo.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        
        workOrder.status = status;
        if (issueDescription) {
            workOrder.issues.push({
                description: issueDescription,
                reportedBy: req.user.id,
                reportedAt: new Date()
            });
        }
        
        await workOrder.save();
        res.json(workOrder);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
