import { verify } from "jsonwebtoken";
import { db } from "../db/db.js";

export async function auth(req, res, next) {
  try {
    // Check if the request has a valid token
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No authorization token provided" });
    }
    
    // Extract token (handles both "Bearer token" and just "token" formats)
    const token = authHeader.startsWith("Bearer ") 
      ? authHeader.substring(7) 
      : authHeader;
    
    // Verify token
    const tokenData = verify(token, process.env.JWT_SECRET || "jwt_secret");
    
    // Check if token is expired
    if (tokenData.exp && tokenData.exp < Math.floor(Date.now() / 1000)) {
      return res.status(401).json({ message: "Token expired" });
    }
    
    // Verify user exists in database
    const user = await db.user.findUnique({
      where: { id: tokenData.id },
      select: { id: true }
    });
    
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    
    // Store token data for route handlers to use
    req.user = tokenData;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
}
