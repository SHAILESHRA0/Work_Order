const express = require('express');
const router = express.Router();
const { workOrderController } = require('../controllers/workOrderController');
const auth = require('../middleware/auth');

// Approval routes
router.put('/:id/approve', auth, workOrderController.approveWorkOrder);
router.put('/:id/reject', auth, workOrderController.rejectWorkOrder);

module.exports = router;