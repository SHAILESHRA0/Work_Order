import { Router } from 'express';
import { workOrderController } from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';
import { validateWorkOrderMiddleware } from '../middleware/validation.js';

const router = Router();

// Routes with validation and error handling
router.get('/list', auth, workOrderController.getAll);
router.get('/pending', auth, workOrderController.getPending);
router.get('/pending-approval', auth, workOrderController.getPendingApproval);
router.post('/create', auth, validateWorkOrderMiddleware, workOrderController.create);
router.get('/by-number/:orderNo', auth, workOrderController.getByOrderNo);
router.put('/update/:id', auth, validateWorkOrderMiddleware, workOrderController.update);
router.put('/:id/approve', auth, workOrderController.approveWorkOrder);
router.put('/:id/reject', auth, workOrderController.rejectWorkOrder);
router.delete('/:id', auth, workOrderController.delete);

export { router as workOrderRouter };

