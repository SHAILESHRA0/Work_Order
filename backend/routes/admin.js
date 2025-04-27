import express from "express";
import { db } from '../db/db.js';
import { admin } from '../middleware/admin.js';
import { auth } from '../middleware/auth.js';
import { hashPassword } from '../utils/hash.js';

const router = express.Router();

router.post("/api/add-employee", admin, async (req, res) => {
  try {
    const { name, email, password, role, department, accessLevel } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role || !department || !accessLevel) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if user exists
    const existingUser = await db.user.findFirst({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists!" });
    }

    const hashedPassword = await hashPassword(password);

    // Create new user with department
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        department: department.toUpperCase(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    // Remove password from response (fixed duplicate declaration)
    const { password: removed, ...userResponse } = newUser;

    return res.status(201).json({
      message: "Employee added successfully!",
      user: userResponse
    });

  } catch (error) {
    console.error('Error creating employee:', error);
    return res.status(500).json({ 
      message: "Server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

router.post("/api/add-user", admin, async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }
  const userExists = await db.user.findFirst({
    where: { email: email },
  });
  if (userExists) {
    return res.status(400).send({ message: "User already exists!" });
  }
  const newUser = await db.$transaction(async (tx) => {
    const hashedPassword = await hashPassword(password);
    return await tx.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: "user",
      },
    });
  });
  if (!newUser) {
    return res.status(400).send({ message: "Error adding user." });
  }
  return res.status(201).send({ message: "User added successfully!" });
});

// Add this endpoint to get departments
router.get("/api/departments", auth, async (req, res) => {
  try {
    const departments = [
      "electrical",
      "mechanical", 
      "electronics",
      "maintenance",
      "operations",
      "production",
      "quality",
      "it"
    ];
    return res.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    return res.status(500).json({ message: "Error fetching departments" });
  }
});

export { router as adminRouter };
