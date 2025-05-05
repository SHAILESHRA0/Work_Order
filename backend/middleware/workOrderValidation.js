const { validateWorkOrder } = require('../utils/validators');

const workOrderValidationMiddleware = (req, res, next) => {
    const { isValid, errors } = validateWorkOrder(req.body);
    
    if (!isValid) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    next();
};

module.exports = workOrderValidationMiddleware;
