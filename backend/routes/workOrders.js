import { Router } from 'express';
import { workOrderController } from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.post('/api/work-order/create', auth, workOrderController.create);
router.get('/api/work-order/get-all', auth, workOrderController.getAll);

export { router as workOrderRouter };
