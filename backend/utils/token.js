import jwt from "jsonwebtoken";

export function getDataFromJWT(req) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return null;
    }
    
    // Extract token (handles both "Bearer token" and just "token" formats)
    const token = authHeader.startsWith("Bearer ") 
      ? authHeader.substring(7) 
      : authHeader;
    
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET || "jwt_secret");
        
        if (tokenData.exp < Math.floor(Date.now() / 1000)) {
            return null;
        }
        
        return tokenData;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
}