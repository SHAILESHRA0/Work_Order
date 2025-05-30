import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import listEndpoints from 'express-list-endpoints';
import path from "path";
import { fileURLToPath } from "url";

import { adminRouter } from "./backend/routes/admin.js";
import { authRouter } from "./backend/routes/auth.js";
import { technicianRouter } from './backend/routes/technician.js';
import { techniciansRouter } from './backend/routes/technicians.js';
import { workOrderRouter } from "./backend/routes/workOrders.js";

config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || "3000");

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use(authRouter);
app.use(adminRouter);
app.use('/api/workorders', workOrderRouter);
app.use('/api/technicians', techniciansRouter);
app.use('/api/technician/work-orders', technicianRouter);

// Serve static assets
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use(express.static(path.join(__dirname, "./frontend")));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something broke!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing server.");
  server.close(() => {
    console.log("Server closed.");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing server.");
  server.close(() => {
    console.log("Server closed.");
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);

  const endpoints = listEndpoints(app);
  console.log("Available Routes:");
  endpoints.forEach(route => {
    console.log(`${route.methods.join(', ').padEnd(10)} ${route.path}`);
  });
});



