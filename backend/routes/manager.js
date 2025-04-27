import { Router } from 'express';
import { managerController } from '../controllers/managerController.js';
import { auth } from '../middleware/auth.js';
import { manager } from '../middleware/manager.js';

const router = Router();

router.get('/api/manager/work-orders', [auth, manager], managerController.getWorkOrders);
router.put('/api/manager/work-orders/:id/approve', [auth, manager], managerController.approveWorkOrder);
router.put('/api/manager/work-orders/:id/clear', [auth, manager], managerController.clearWorkOrder);

export { router as managerRouter };

