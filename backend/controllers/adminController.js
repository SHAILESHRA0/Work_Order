const bcrypt = require('bcrypt');
const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
    try {
        const { name, email, password, role, department, accessLevel } = req.body;

        // Check if employee already exists
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: "Employee already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new employee
        const employee = new Employee({
            name,
            email,
            password: hashedPassword,
            role,
            department,
            accessLevel,
            createdBy: req.user.id, // Assuming we have user info from auth middleware
        });

        await employee.save();
        res.status(201).json({ message: "Employee added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
