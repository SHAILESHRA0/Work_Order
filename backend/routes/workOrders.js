import { Router } from 'express';
import { workOrderController } from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';
import { manager } from '../middleware/manager.js';

const router = Router();

router.post('/api/work-order/create', auth, workOrderController.create);
router.get('/api/work-order/get-all', auth, workOrderController.getAll);
router.put('/api/work-order/approve/:id', [auth, manager], workOrderController.approve);
router.put('/api/work-order/clear/:id', [auth, manager], workOrderController.clear);
router.get('/api/work-order/by-number/:orderNo', auth, workOrderController.getByOrderNo);

export { router as workOrderRouter };
