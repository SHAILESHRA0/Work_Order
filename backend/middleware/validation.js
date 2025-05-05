import { WORK_ORDER_STATUS } from '../models/WorkOrder.js';

export const validateWorkOrder = (workOrder) => {
    const errors = [];

    // Required fields validation
    if (!workOrder.title?.trim()) {
        errors.push('Title is required');
    }
    if (!workOrder.description?.trim()) {
        errors.push('Description is required');
    }
    if (!workOrder.department) {
        errors.push('Department is required');
    }
    if (!workOrder.startDate) {
        errors.push('Start date is required');
    }
    if (!workOrder.dueDate) {
        errors.push('Due date is required');
    }

    // Date validation
    if (workOrder.startDate && workOrder.dueDate) {
        if (new Date(workOrder.dueDate) <= new Date(workOrder.startDate)) {
            errors.push('Due date must be after start date');
        }
    }

    // Status validation
    if (workOrder.status && !Object.values(WORK_ORDER_STATUS).includes(workOrder.status)) {
        errors.push('Invalid status');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

export const validateWorkOrderMiddleware = (req, res, next) => {
    const { isValid, errors } = validateWorkOrder(req.body);
    if (!isValid) {
        return res.status(400).json({ errors });
    }
    next();
};
