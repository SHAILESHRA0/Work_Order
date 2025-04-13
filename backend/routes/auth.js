import express from "express";
import jwt from "jsonwebtoken";
import { db } from "../db/db.js";
import * as hashing from "../utils/hash.js";
import { config } from "dotenv";

config();

const router = express.Router();

router.post("/api/auth/login", async (req, res) => {
  try {
    const { password, email } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "name and password are required." });
    }

    // Find user in MongoDB
    const user = await db.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User Not found" });
    }

    // Compare passwords
    const isMatch = await hashing.comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    await db.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Send response with token and redirect URL
    return res
      .status(202)
      .header("Authorization", token)
      .json({ role: user.role, username: user.name, redirectUrl: "/", token });
  } catch (error) {
    console.error("Login Error:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

router.post("/api/auth/signup", async (req, res) => {
  const { email, name, password } = req.body;

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
        name: name,
        email: email,
        password: hashedPassword,
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

export { router };
