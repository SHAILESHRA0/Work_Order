import express from 'express';
import {
    assignWorkOrder,
    createWorkOrder,
    getWorkOrderById,
    getWorkOrders,
    updateStatus,
    updateWorkOrder
} from '../controllers/workOrderController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, createWorkOrder);
router.put('/update/:id', auth, updateWorkOrder);
router.get('/list', auth, getWorkOrders);
router.get('/:id', auth, getWorkOrderById);
router.put('/assign/:id', auth, assignWorkOrder);
router.put('/status/:id', auth, updateStatus);

export default router;
