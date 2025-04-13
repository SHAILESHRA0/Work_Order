const express = require("express");
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const db = require("./db");
// const adminRoutes = require("./routes/adminRoutes");
// const workOrderRoutes = require('./routes/workOrders');
// const supervisorRoutes = require('./routes/supervisor');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const Manager = require('./models/Manager');
// const WorkOrder = require('./models/WorkOrder');
const http = require("http");
const WebSocket = require("ws");
const bodyParser = require("body-parser");
// const { assignWorkOrderToTechnician, getManagerTasks } = require('./database');
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0"; // Allows external access

// // Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// // Default route for API home page
app.get("/api", (req, res) => {
  res.send("🚀 Welcome to the Work Order Management System API!");
});

// // API Routes
app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use('/api/workorders', workOrderRoutes);
// app.use('/api/supervisor', supervisorRoutes);

// // Authentication middleware
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const manager = await Manager.findById(decoded.id);
        if (!manager) throw new Error();
        req.manager = manager;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
};

// // Manager routes
app.post('/api/managers/register', async (req, res) => {
    try {
        const manager = new Manager(req.body);
        await manager.save();
        
        res.status(201).send(JSON.stringify(manager));
    } catch (error) {
        res.status(400).send(error);
    }
});

// app.post('/api/managers/login', async (req, res) => {
//     try {
//         const manager = await Manager.findOne({ username: req.body.username });
//         if (!manager) throw new Error('Invalid credentials');

//         const isMatch = await bcrypt.compare(req.body.password, manager.password);
//         if (!isMatch) throw new Error('Invalid credentials');

//         const token = jwt.sign({ id: manager._id }, 'your_jwt_secret', { expiresIn: '24h' });
//         res.send({ token });
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// });

// // Work Order routes
// app.post('/api/workorders', auth, async (req, res) => {
//     try {
//         const workOrder = new WorkOrder({
//             ...req.body,
//             createdBy: req.manager._id
//         });
//         await workOrder.save();
//         res.status(201).send(workOrder);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// app.get('/api/workorders', auth, async (req, res) => {
//     try {
//         const workOrders = await WorkOrder.find({ createdBy: req.manager._id });
//         res.send(workOrders);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// app.delete('/api/workorders/:id', auth, async (req, res) => {
//     try {
//         const workOrder = await WorkOrder.findOneAndDelete({
//             _id: req.params.id,
//             createdBy: req.manager._id
//         });
//         if (!workOrder) return res.status(404).send();
//         res.send(workOrder);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // WebSocket routes
// wss.on('connection', (ws) => {
//     console.log('New WebSocket connection established.');

//     ws.on('close', () => {
//         console.log('WebSocket connection closed.');
//     });

//     ws.on('error', (error) => {
//         console.error('WebSocket error:', error);
//     });
// });

// function broadcast(data) {
//     if (!data || typeof data !== 'object') {
//         console.error('Invalid data for broadcast:', data);
//         return;
//     }

//     wss.clients.forEach(client => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(data));
//         }
//     });
// }

// app.post('/api/assignWorkOrder', (req, res) => {
//     const { workOrderId, technicianId } = req.body;

//     if (!workOrderId || !technicianId) {
//         return res.status(400).json({ success: false, message: "Invalid input" });
//     }

//     assignWorkOrderToTechnician(workOrderId, technicianId)
//         .then(() => {
//             broadcast({
//                 type: 'taskUpdate',
//                 workOrderId,
//                 technicianId,
//                 message: `Task ${workOrderId} assigned to technician ${technicianId}.`,
//             });
//             res.json({ success: true });
//         })
//         .catch(err => {
//             console.error('Error assigning work order:', err);
//             res.status(500).json({ success: false, message: "Internal server error" });
//         });
// });

// app.get('/api/getManagerTasks', (req, res) => {
//     getManagerTasks()
//         .then(tasks => res.json(tasks))
//         .catch(err => {
//             console.error('Error fetching manager tasks:', err);
//             res.status(500).json({ success: false, message: "Internal server error" });
//         });
// });

// // Serve static assets
app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use(express.static(path.join(__dirname, "../frontend")));

// // Catch-all route for SPA - must be after API routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// // Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something broke!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Gracefull Db disconnection
process.on("SIGTERM", async () => {
    console.log("SIGTERM signal received: closing server and disconnecting database.");
    server.close(async () => {
        await dbConnection.disconnectDB();
    });
});
process.on("SIGINT", async () => {
    console.log("SIGINT signal received: closing server and disconnecting database.");
    server.close(async () => {
        await dbConnection.disconnectDB();
    });
});
server.listen(PORT, HOST, async () => {
  try {
    await dbConnection.connectDB();
    console.log(`🚀 Server running at http://localhost:${PORT}/`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
});
