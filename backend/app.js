import cors from 'cors';
import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import { workOrderRouter } from './routes/workOrders.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', workOrderRouter);

// Error handling
app.use(errorHandler);

export default app;
