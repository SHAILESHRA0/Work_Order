import { verify } from "jsonwebtoken";

export function auth(req, res, next) {
  // Check if the request has a valid token
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const tokenData = verify(token, process.env.JWT_SECRET);

  if (tokenData.exp < Date.now()) {
    return res.status(401).json({ message: "Token expired" });
  }
  next();
}
