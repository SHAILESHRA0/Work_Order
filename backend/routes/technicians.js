import express from 'express';
import { db } from '../db/db.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Valid departments from schema
const VALID_DEPARTMENTS = [
    'ELECTRICAL',
    'MECHANICAL',
    'IT', 
    'OPERATIONS',
    'MAINTENANCE',
    'QUALITY',
    'HSE',
    'GENERAL'
];

router.get('/api/technicians', auth, async (req, res) => {
    try {
        const { department } = req.query;

        // Validate department if provided
        if (department && !VALID_DEPARTMENTS.includes(department.toUpperCase())) {
            return res.status(400).json({
                message: 'Invalid department',
                validDepartments: VALID_DEPARTMENTS
            });
        }

        const where = {
            role: 'TECHNICIAN',
            isActive: true
        };

        if (department) {
            where.department = department.toUpperCase();
        }

        const technicians = await db.user.findMany({
            where,
            select: {
                id: true,
                name: true,
                department: true,
                skills: true,
                availability: true
            },
            orderBy: {
                name: 'asc'
            }
        });
        
        res.json(technicians);
    } catch (error) {
        console.error('Error fetching technicians:', error);
        res.status(500).json({ 
            message: 'Error fetching technicians',
            error: error.message 
        });
    }
});

// Add new technician (manager only)
router.post('/api/technicians', auth, async (req, res) => {
    try {
        const technician = new db.user(req.body);
        await technician.save();
        res.status(201).json(technician);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export { router as technicianRouter };
