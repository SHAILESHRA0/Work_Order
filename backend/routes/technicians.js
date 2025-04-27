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
            role: 'technician',
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
                isActive: true
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

export { router as technicianRouter };
