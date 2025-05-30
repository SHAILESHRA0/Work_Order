import { Router } from 'express';
import { technicianController } from '../controllers/technicianController.js';
import { auth } from '../middleware/auth.js';

const technicianRouter = Router();

technicianRouter.get('/assigned', auth, technicianController.getAssignedWorkOrders);
technicianRouter.put('/:id/status', auth, technicianController.updateWorkOrderStatus);

export { technicianRouter };

