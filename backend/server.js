import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import http from "http";
import jwt from 'jsonwebtoken';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from "ws";
import { connectDB } from './db/db.js';
import { validateContentType } from './middleware/contentType.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authRouter } from './routes/auth.js';
import { technicianRouter } from './routes/technicians.js';
import workOrderRoutes from './routes/workOrder.js';

// Initialize ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

// Connect to database
await connectDB();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://yoursite.com' : 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(validateContentType);

// Serve static files from frontend directory
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use(express.static(frontendPath));

// Root route handler
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Authentication middleware
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Error('No token provided');
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            include: { employees: true }
        });
        if (!user) throw new Error('User not found');
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message || 'Please authenticate' });
    }
};

// Import routes
import { adminRouter } from './routes/admin.js';
import { supervisorRouter } from './routes/supervisor.js';
import { userRouter } from './routes/users.js';

// API routes
app.get("/api", (req, res) => {
    res.send("🚀 Welcome to the Work Order Management System API!");
});

// API routes with proper prefixes
app.use('/api/auth', authRouter);
app.use('/api/workorders', workOrderRoutes);
app.use('/api/technician', auth, technicianRouter);
app.use('/api/supervisor', auth, supervisorRouter);
app.use('/api/admin', auth, adminRouter);
app.use('/api/users', auth, userRouter);

// Manager registration
app.post('/api/managers/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const manager = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'MANAGER',
                employees: {
                    create: {
                        jobTitle: 'Manager',
                        department: req.body.department,
                        access: 'high'
                    }
                }
            }
        });
        
        res.status(201).json({ id: manager.id, email: manager.email, role: manager.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// WebSocket connection handling
const clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('New WebSocket client connected');

    ws.on('message', async (message) => {
        try {
            const data = JSON.parse(message);
            
            // Handle different message types
            switch(data.type) {
                case 'workorder_update':
                    // Broadcast work order updates to all connected clients
                    broadcastMessage({
                        type: 'workorder_update',
                        data: data.data
                    });
                    break;
                    
                case 'notification':
                    // Handle notifications
                    broadcastMessage({
                        type: 'notification',
                        data: data.data
                    });
                    break;

                default:
                    console.log('Unknown message type:', data.type);
            }
        } catch (error) {
            console.error('WebSocket message error:', error);
        }
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        clients.delete(ws);
    });
});

// Broadcast helper function
function broadcastMessage(message) {
    const messageString = JSON.stringify(message);
    clients.forEach(client => {
        if (client.readyState === 1) { // 1 = OPEN
            client.send(messageString);
        }
    });
}

// Enhanced error handling
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    next();
});

app.use((err, req, res, next) => {
    console.error('Error:', {
        message: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
    });

    res.status(err.status || 500).json({
        message: err.message || "Something went wrong!",
        error: process.env.NODE_ENV === "development" ? {
            stack: err.stack,
            details: err.details
        } : undefined
    });
});

// Improved graceful shutdown
async function gracefulShutdown(signal) {
    console.log(`${signal} signal received: closing HTTP server and database connection`);
    
    // Close WebSocket connections
    wss.clients.forEach(client => {
        client.close();
    });
    
    // Close HTTP server
    server.close(() => {
        console.log('HTTP server closed');
    });
    
    try {
        // Disconnect Prisma
        await prisma.$disconnect();
        console.log('Database connection closed');
        
        process.exit(0);
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something broke!",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
});

// Catch-all route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM signal received: closing server and disconnecting database.");
    await prisma.$disconnect();
    server.close();
});

process.on("SIGINT", async () => {
    console.log("SIGINT signal received: closing server and disconnecting database.");
    await prisma.$disconnect();
    server.close();
});

const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    server.listen(PORT, HOST, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Export for potential import in other files
export { app, prisma, server };

// Error handling middleware - must be last
app.use(errorHandler);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

