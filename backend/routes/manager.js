import { Router } from 'express';
import { managerController } from '../controllers/managerController.js';
import { auth } from '../middleware/auth.js';
import checkRole from '../middleware/checkRole.js';
import { manager } from '../middleware/manager.js';

const router = Router();

router.get('/api/manager/work-orders', [auth, manager, checkRole(['MANAGER'])], managerController.getWorkOrders);
router.put('/api/manager/work-orders/:id/approve', [auth, manager, checkRole(['MANAGER'])], managerController.approveWorkOrder);
router.put('/api/manager/work-orders/:id/clear', [auth, manager, checkRole(['MANAGER'])], managerController.clearWorkOrder);
router.put('/api/manager/work-orders/:id/reject', [auth, manager, checkRole(['MANAGER'])], managerController.rejectWorkOrder);

export { router as managerRouter };

