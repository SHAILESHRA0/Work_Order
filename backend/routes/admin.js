const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Employee = require('../models/Employee');

// Add Employee
router.post('/add-employee', auth, async (req, res) => {
    try {
        const { name, email, password, role, accessLevel } = req.body;
        
        const employee = new Employee({
            name,
            email,
            password,
            role,
            accessLevel
        });
        
        await employee.save();
        res.status(201).send({ message: 'Employee added successfully!' });
    } catch (error) {
        res.status(400).send({ message: 'Error adding employee.', error });
    }
});

module.exports = router;