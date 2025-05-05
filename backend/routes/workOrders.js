import { Router } from 'express';
import { workOrderController } from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';
import { validateWorkOrderMiddleware } from '../middleware/validation.js';

const router = Router();

// Routes with validation and error handling
router.get('/list', auth, workOrderController.getAll);
router.get('/pending', auth, workOrderController.getPendingOrders); // Add this line
router.post('/create', auth, validateWorkOrderMiddleware, workOrderController.create);
router.get('/by-number/:orderNo', auth, workOrderController.getByOrderNo);
router.put('/update/:id', auth, validateWorkOrderMiddleware, workOrderController.update);
router.delete('/:id', auth, workOrderController.delete);

export const workOrderRouter = router;

