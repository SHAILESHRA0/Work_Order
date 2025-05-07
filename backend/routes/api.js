const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');
const workOrderValidationMiddleware = require('../middleware/workOrderValidationMiddleware');

// Import controllers
const { workOrderController } = require('../controllers/workOrderController');
const technicianController = require('../controllers/technicianController');
const supervisorController = require('../controllers/supervisorController');
const { managerController } = require('../controllers/managerController');
const { hodController } = require('../controllers/hodController');

// Work Order routes
router.post('/work-orders', auth, workOrderValidationMiddleware, async (req, res) => {
    try {
        const result = await workOrderController.create(req, res);
        return result;
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message || 'Failed to create work order'
        });
    }
});
router.get('/work-orders', auth, workOrderController.getAll);
router.get('/work-orders/:id', auth, workOrderController.getById);
router.put('/work-orders/:id', auth, workOrderController.update);
router.delete('/work-orders/:id', auth, workOrderController.delete);
router.put('/work-orders/:id/approve', auth, roleCheck(['MANAGER']), workOrderController.approveWorkOrder);
router.put('/work-orders/:id/reject', auth, roleCheck(['MANAGER']), workOrderController.rejectWorkOrder);

// Technician routes
router.get('/technician/work-orders', auth, roleCheck(['TECHNICIAN']), technicianController.getAssignedWorkOrders);
router.put('/technician/work-orders/:id/status', auth, roleCheck(['TECHNICIAN']), technicianController.updateWorkOrderStatus);

// Supervisor routes
router.get('/supervisor/work-orders', auth, roleCheck(['SUPERVISOR']), supervisorController.getWorkOrders);
router.post('/supervisor/assign-work-order', auth, roleCheck(['SUPERVISOR']), supervisorController.assignWorkOrder);
router.get('/supervisor/technicians', auth, roleCheck(['SUPERVISOR']), supervisorController.getTechnicians);

// Manager routes
router.get('/manager/work-orders', auth, roleCheck(['MANAGER']), managerController.getWorkOrders);
router.put('/manager/work-orders/:id/approve', auth, roleCheck(['MANAGER']), managerController.approveWorkOrder);
router.put('/manager/work-orders/:id/reject', auth, roleCheck(['MANAGER']), managerController.rejectWorkOrder);

// HOD routes
router.get('/hod/work-orders', auth, roleCheck(['HOD']), hodController.getWorkOrders);

module.exports = router;
