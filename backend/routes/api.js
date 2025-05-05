const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// Import controllers
const { workOrderController } = require('../controllers/workOrderController');
const technicianController = require('../controllers/technicianController');
const supervisorController = require('../controllers/supervisorController');
const { managerController } = require('../controllers/managerController');
const { hodController } = require('../controllers/hodController');

// Work Order routes
router.post('/work-orders', auth, workOrderController.create);
router.get('/work-orders', auth, workOrderController.getAll);
router.get('/work-orders/:id', auth, workOrderController.getById);
router.put('/work-orders/:id', auth, workOrderController.update);
router.delete('/work-orders/:id', auth, workOrderController.delete);

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
router.put('/manager/work-orders/:id/clear', auth, roleCheck(['MANAGER']), managerController.clearWorkOrder);

// HOD routes
router.get('/hod/work-orders', auth, roleCheck(['HOD']), hodController.getWorkOrders);

module.exports = router;
