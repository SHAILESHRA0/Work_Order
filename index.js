import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { authRouter } from "./backend/routes/auth.js";
import { adminRouter } from "./backend/routes/admin.js";
import { workOrderRouter } from "./backend/routes/workOrders.js";
// import { userRouter } from "./routes/users.js";
// import { taskRouter } from "./routes/tasks.js";

config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0"; // Allows external access

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use(authRouter);
app.use(adminRouter);
app.use(workOrderRouter);

app.get("/api", (req, res) => {
  res.send("🚀 Welcome to the Work Order Management System API!");
});

// Serve static assets
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use(express.static(path.join(__dirname, "./frontend")));

// Catch-all route for SPA
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend", "index.html"));
// });

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

// Start Server
server.listen(PORT, HOST, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
