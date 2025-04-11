const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

// Add User Route
router.post("/addUser", async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!username || !password || !role) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            email: `${username}@example.com`, // Default email
            redirectUrl: `/${role}.html`, // Redirect URL based on role
        });

        await newUser.save();
        res.status(201).json({ message: "User added successfully." });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

router.post(
    '/add-employee',
    [authMiddleware, roleCheck(['admin'])],
    adminController.addEmployee
);

module.exports = router;