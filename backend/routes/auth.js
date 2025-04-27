import { config } from "dotenv";
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import * as hashing from "../utils/hash.js";

config();

const router = Router();

router.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Add debug logging
    console.log("Login attempt for email:", email);

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user without password hash comparison first
    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
        name: true,
        isActive: true
      }
    });

    if (!user) {
      console.log("User not found:", email);
      return res.status(404).json({ message: "User not found" });
    }

    // Debug log
    console.log("Found user:", { email: user.email, role: user.role, isActive: user.isActive });

    if (!user.isActive) {
      return res.status(401).json({ message: "Account is not activated" });
    }

    // Direct password comparison for debugging
    const isMatch = await hashing.comparePassword(password, user.password);
    console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "24h" }
    );

    // Update last login
    await db.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    // Send response
    return res.status(200).json({
      token,
      role: user.role,
      name: user.name,
      redirectUrl: getRedirectUrl(user.role)
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ 
      message: "Server error",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

router.post("/api/auth/signup", async (req, res) => {
  const { email, name, password, department } = req.body;

  if (!email || !name || !password) {
    return res
      .status(400)
      .json({ message: "name, email and password are required." });
  }

  try {
    const user = await db.user.findUnique({
      where: { email: email },
      select: { id: true, email: true },
    });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hashing.hashPassword(password);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        department: department || "GENERAL", // Set default department if none provided
      },
    });

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

// Add validation endpoint
router.get("/api/auth/validate", async (req, res) => {
  try {
    // Auth middleware already verified the token
    // Get user from database to ensure they still exist and are active
    const user = await db.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        role: true,
        isActive: true
      }
    });

    if (!user || !user.isActive) {
      return res.json({ 
        valid: false,
        message: "User not found or inactive"
      });
    }

    return res.json({
      valid: true,
      role: user.role,
      redirectUrl: getRedirectUrl(user.role)
    });

  } catch (error) {
    console.error("Token validation error:", error);
    return res.status(500).json({ 
      valid: false,
      message: "Error validating token" 
    });
  }
});

// Helper function to get redirect URL based on role
function getRedirectUrl(role) {
  const roleUrls = {
    'admin': '/admin.html',
    'manager': '/manager.html',
    'supervisor': '/supervisor.html',
    'technician': '/technician.html',
    'engineer': '/engineer.html',
    'hod': '/hod.html',
    'user': '/user.html'
  };
  return roleUrls[role.toLowerCase()] || '/login.html';
}

export { router as authRouter };

