import express from 'express';
import { db } from '../db/db.js';
import { auth } from '../middleware/auth.js';
import { getDataFromJWT } from '../utils/token.js';

const router = express.Router();

// Validation schema for creating a work order

// Get all work orders
router.get('/api/work-order/get-all', auth, async (req, res) => {
  try {
    const workOrders = await db.workOrder.findMany({
      include: {
        tasks: true,
        _count: true
      }
    });
    return res.json(workOrders);
  } catch (error) {
    console.error('Error fetching work orders:', error);
    return res.status(500).json({ error: 'Failed to fetch work orders' });
  }
});

// Get a single work order by ID
// router.get('/api/work-order/get/:id', auth, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const workOrder = await db.workOrder.findUnique({
//       where: { id },
//       include: {
//         tasks: true
//       }
//     });
    
//     if (!workOrder) {
//       return res.status(404).json({ error: 'Work order not found' });
//     }
    
//     res.json(workOrder);
//   } catch (error) {
//     console.error('Error fetching work order:', error);
//     res.status(500).json({ error: 'Failed to fetch work order' });
//   }
// });

// Create a new work order
router.post('/api/work-order/create', auth, async (req, res) => {
  try {
    const data = req.body
    const tokenData = getDataFromJWT(req)

    if (!tokenData) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Extract tasks from the data
    const { tasks, ...workOrderData } = data;
    
    // Create work order with nested tasks
    const workOrder = await db.workOrder.create({
      data: {
        ...workOrderData,
        tasks: {
          create: tasks.map((task) => ({
            ...task,
            assignedById: tokenData.id,
          })),
        },
      },
      include: {
        tasks: true,
      },
    });
    
    res.status(201).json(workOrder);
  } catch (error) {
    console.error('Error creating work order:', error);
    res.status(500).json({ error: 'Failed to create work order' });
  }
});

// Update a work order
// router.put('/api/work-order/update/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const { tasks, ...workOrderData } = req.body;
    
//     // First update the work order
//     const workOrder = await db.workOrder.update({
//       where: { id },
//       data: workOrderData
//     });
    
//     // Then handle tasks if provided
//     if (tasks && tasks.length > 0) {
//       // Delete existing tasks
//       await db.task.deleteMany({
//         where: { workOrderId: id }
//       });
      
//       // Create new tasks
//       for (const task of tasks) {
//         await db.task.create({
//           data: {
//             ...task,
//             workOrderId: id
//           }
//         });
//       }
//     }
    
//     // Return updated work order with tasks
//     const updatedWorkOrder = await db.workOrder.findUnique({
//       where: { id },
//       include: {
//         tasks: true
//       }
//     });
    
//     res.json(updatedWorkOrder);
//   } catch (error) {
//     console.error('Error updating work order:', error);
//     res.status(500).json({ error: 'Failed to update work order' });
//   }
// });

// Delete a work order
// router.delete('/api/work-order/delete/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     // First delete associated tasks
//     await db.task.deleteMany({
//       where: { workOrderId: id }
//     });
    
//     // Then delete the work order
//     const workOrder = await db.workOrder.delete({
//       where: { id }
//     });
    
//     res.json(workOrder);
//   } catch (error) {
//     console.error('Error deleting work order:', error);
//     res.status(500).json({ error: 'Failed to delete work order' });
//   }
// });

export { router as workOrderRouter };
