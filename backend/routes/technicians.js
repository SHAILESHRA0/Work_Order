import express from 'express';
import prisma from '../db/prisma.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Valid departments from schema
const VALID_DEPARTMENTS = [
    'ELECTRICAL',
    'MECHANICAL',
    'ELECTRONICS',
    'MAINTENANCE',
    'OPERATIONS',
    'PRODUCTION',
    'QUALITY',
    'IT',
    'GENERAL'
];

router.get('/', auth, async (req, res) => {
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

        const technicians = await prisma.user.findMany({
            where,
            select: {
                id: true,
                name: true,
                department: true,
                email: true,
                role: true
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
router.post('/', auth, async (req, res) => {
    try {
        const technician = await prisma.user.create({
            data: {
                ...req.body,
                role: 'technician',
                isActive: true
            },
            select: {
                id: true,
                name: true,
                email: true,
                department: true,
                role: true
            }
        });
        res.status(201).json(technician);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export { router as techniciansRouter };
