export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Handle Prisma errors
    if (err.name === 'PrismaClientKnownRequestError') {
        return res.status(400).json({
            error: 'Database operation failed',
            details: err.message
        });
    }

    // Handle validation errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Validation failed',
            details: err.message
        });
    }

    // Handle unauthorized errors
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            error: 'Authentication required'
        });
    }

    // Add JSON parsing error handler
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            success: false,
            error: 'Invalid JSON payload',
            details: err.message
        });
    }

    // Default error
    res.status(500).json({
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
};
