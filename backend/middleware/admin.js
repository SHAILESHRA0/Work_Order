import jwt from "jsonwebtoken";

export function admin(req, res, next) {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({ message: "No token provided" });
        }

        // Extract token (handles both "Bearer token" and just "token" formats)
        const token = authHeader.startsWith("Bearer ") 
            ? authHeader.substring(7) 
            : authHeader;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!decoded || decoded.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Admin only." });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.error("Admin middleware error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
