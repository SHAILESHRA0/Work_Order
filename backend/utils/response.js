const apiResponse = {
    success: (res, data = null, message = 'Success', code = 200) => {
        return res.status(code).json({
            success: true,
            message,
            data
        });
    },

    error: (res, message = 'Error occurred', code = 500, errors = null) => {
        return res.status(code).json({
            success: false,
            message,
            errors
        });
    },

    validation: (res, errors) => {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors
        });
    }
};

module.exports = apiResponse;
