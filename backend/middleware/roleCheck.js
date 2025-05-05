const roleCheck = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(403).json({ 
                success: false, 
                error: 'Access denied: No role specified' 
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                success: false, 
                error: 'Access denied: Insufficient permissions' 
            });
        }

        next();
    };
};

module.exports = roleCheck;
