import jwt from "jsonwebtoken";

export function admin(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const tokenData = jwt.verify(token, process.env.JWT_SECRET);

  if (tokenData.exp < Math.floor(Date.now() / 1000)) {
    return res.status(401).json({ message: "Token expired" });
  }

  if (tokenData.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Forbidden - Insufficient role permissions" });
  }

  next();
}
