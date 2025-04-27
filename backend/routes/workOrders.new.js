import { Router } from 'express';
import { workOrderController } from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';
import roleCheck from '../middleware/roleCheck.js';

const router = Router();

const allowedCreateRoles = ['ENGINEER', 'SUPERVISOR', 'TECHNICIAN'];
const allowedViewRoles = ['MANAGER', 'HOD', 'SUPERVISOR', 'ENGINEER', 'TECHNICIAN'];
const allowedApproveClearRoles = ['MANAGER', 'HOD'];

router.post('/api/work-order/create', auth, roleCheck(allowedCreateRoles), workOrderController.create);
router.get('/api/work-order/get-all', auth, roleCheck(allowedViewRoles), workOrderController.getAll);
router.put('/api/work-order/approve/:id', auth, roleCheck(allowedApproveClearRoles), workOrderController.approve);
router.put('/api/work-order/clear/:id', auth, roleCheck(allowedApproveClearRoles), workOrderController.clear);
router.get('/api/work-order/by-number/:orderNo', auth, roleCheck(allowedViewRoles), workOrderController.getByOrderNo);

export { router as workOrderRouter };
