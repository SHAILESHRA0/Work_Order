const express = require('express');
const router = express.Router();
const WorkOrder = require('../models/WorkOrder');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// Get all work orders
router.get('/', async (req, res) => {
    try {
        const workOrders = await WorkOrder.find().sort({ createdAt: -1 });
        res.json(workOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Manager routes
router.post('/', auth, roleCheck('manager'), async (req, res) => {
  try {
    const workOrder = new WorkOrder({
      ...req.body,
      assignedBy: req.user.id,
      history: [{
        action: 'created',
        performedBy: req.user.id,
        timestamp: new Date(),
        details: 'Work order created'
      }]
    });
    await workOrder.save();
    res.status(201).json(workOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Supervisor routes
router.get('/supervised', auth, roleCheck('supervisor'), async (req, res) => {
  try {
    const workOrders = await WorkOrder.find({ supervisor: req.user.id })
      .populate('assignedTo', 'username')
      .populate('assignedBy', 'username');
    res.json(workOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Technician routes
router.put('/:id/status', auth, roleCheck('technician'), async (req, res) => {
  try {
    const workOrder = await WorkOrder.findById(req.params.id);
    if (workOrder.assignedTo.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    workOrder.status = req.body.status;
    workOrder.history.push({
      action: 'status-update',
      performedBy: req.user.id,
      timestamp: new Date(),
      details: `Status updated to ${req.body.status}`
    });
    
    await workOrder.save();
    res.json(workOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update work order
router.put('/:id', async (req, res) => {
    try {
        const updatedWorkOrder = await WorkOrder.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedWorkOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete work order
router.delete('/:id', async (req, res) => {
    try {
        await WorkOrder.findByIdAndDelete(req.params.id);
        res.json({ message: 'Work order deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
