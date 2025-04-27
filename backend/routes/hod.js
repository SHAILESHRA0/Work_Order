import { Router } from 'express';
import { hodController } from '../controllers/hodController.js';
import { auth } from '../middleware/auth.js';
import { hod } from '../middleware/hod.js';

const router = Router();

router.get('/api/hod/work-orders', [auth, hod], hodController.getWorkOrders);

export { router as hodRouter };

