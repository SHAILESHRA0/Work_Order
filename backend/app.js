import express from 'express';
import { router as technicianRouter } from './routes/technician.js';

const app = express();

// ...existing middleware and routes...

app.use('/api/technician/work-orders', technicianRouter);

// ...existing error handling and server start...