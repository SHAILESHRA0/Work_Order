import express from "express";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";
import { db } from "../db/db.js";
import { hashPassword } from "../utils/hash.js";
import { getDataFromJWT } from "../utils/token.js";

const router = express.Router();

// Get all users (admin only)
router.get("/api/users", auth, admin, async (req, res) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        userType: true,
        lastLogin: true,
        createdAt: true,
        employee: {
          select: {
            id: true,
            access: true,
            department: true,
            jobTitle: true
          }
        },
        client: {
          select: {
            id: true,
            company: true,
            address: true,
            phone: true
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    });
    
    return res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Error fetching users" });
  }
});

// Get current user profile
router.get("/api/profile", auth, async (req, res) => {
  try {
    const tokenData = getDataFromJWT(req);
    
    const user = await db.user.findUnique({
      where: { id: tokenData.id },
      include: {
        employee: true,
        client: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    return res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ message: "Error fetching profile" });
  }
});

// Create new internal employee (admin only)
router.post("/api/employees", auth, admin, async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      department,
      jobTitle,
      access
    } = req.body;
    
    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    
    const hashedPassword = await hashPassword(password);
    
    const newUser = await db.$transaction(async (tx) => {
      // Create employee first
      const employee = await tx.employee.create({
        data: {
          department,
          jobTitle,
          access: access || "low"
        }
      });
      
      // Create user and link to employee
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
          userType: "internal",
          employeeId: employee.id
        }
      });
      
      return user;
    });
    
    return res.status(201).json({ 
      message: "Employee created successfully",
      id: newUser.id
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    return res.status(500).json({ message: "Error creating employee" });
  }
});

// Create new external client (admin only)
router.post("/api/clients", auth, admin, async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      company,
      address,
      phone
    } = req.body;
    
    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    
    const hashedPassword = await hashPassword(password);
    
    const newUser = await db.$transaction(async (tx) => {
      // Create client first
      const client = await tx.client.create({
        data: {
          company,
          address,
          phone
        }
      });
      
      // Create user and link to client
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: "user",
          userType: "external",
          clientId: client.id
        }
      });
      
      return user;
    });
    
    return res.status(201).json({ 
      message: "Client created successfully",
      id: newUser.id
    });
  } catch (error) {
    console.error("Error creating client:", error);
    return res.status(500).json({ message: "Error creating client" });
  }
});

// Update user profile
router.put("/api/profile", auth, async (req, res) => {
  try {
    const tokenData = getDataFromJWT(req);
    const { name, email, currentPassword, newPassword } = req.body;
    
    const user = await db.user.findUnique({
      where: { id: tokenData.id },
      select: {
        id: true,
        password: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    let updateData = { name, email };
    
    // If changing password
    if (newPassword && currentPassword) {
      const isPasswordValid = await comparePassword(currentPassword, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Current password is incorrect" });
      }
      
      updateData.password = await hashPassword(newPassword);
    }
    
    const updatedUser = await db.user.update({
      where: { id: tokenData.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        userType: true
      }
    });
    
    return res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: "Error updating profile" });
  }
});

export { router as userRouter };
