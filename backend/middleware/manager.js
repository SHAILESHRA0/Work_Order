import jwt from "jsonwebtoken";

export function manager(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        if (decoded.role !== 'manager') {
            return res.status(403).json({ message: "Access denied - Manager only" });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
