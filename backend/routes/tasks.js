import express from "express";
import { auth } from "../middleware/auth.js";
import { db } from "../db/db.js";
import { getDataFromJWT } from "../utils/token.js";

const router = express.Router();

// Get all tasks for a work order
router.get("/api/workorders/:workOrderId/tasks", auth, async (req, res) => {
  try {
    const { workOrderId } = req.params;
    const tasks = await db.task.findMany({
      where: { workOrderId },
      include: {
        assignedTo: true,
        assignedBy: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    
    return res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Error fetching tasks" });
  }
});

// Get tasks assigned to current user (technician)
router.get("/api/my-tasks", auth, async (req, res) => {
  try {
    const tokenData = getDataFromJWT(req);
    const tasks = await db.task.findMany({
      where: {
        assignedToId: tokenData.id
      },
      include: {
        workOrder: true,
        assignedBy: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        dueDate: "asc"
      }
    });
    
    return res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Error fetching tasks" });
  }
});

// Create a new task (manager only)
router.post("/api/workorders/:workOrderId/tasks", auth, async (req, res) => {
  try {
    const { workOrderId } = req.params;
    const tokenData = getDataFromJWT(req);
    
    // Check if user is a manager
    if (tokenData.role !== "manager" && tokenData.role !== "admin") {
      return res.status(403).json({ message: "Only managers can create tasks" });
    }
    
    // Get employee ID for manager
    const manager = await db.employee.findFirst({
      where: {
        user: {
          id: tokenData.id
        }
      }
    });
    
    if (!manager) {
      return res.status(404).json({ message: "Manager employee record not found" });
    }
    
    const {
      title,
      description,
      priority,
      assignedToId,
      estimatedHours,
      startDate,
      dueDate
    } = req.body;
    
    const task = await db.task.create({
      data: {
        title,
        description,
        priority: priority || "low",
        estimatedHours,
        assignedToId,
        assignedById: manager.id,
        workOrderId,
        startDate: startDate ? new Date(startDate) : null,
        dueDate: dueDate ? new Date(dueDate) : null
      }
    });
    
    return res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ message: "Error creating task" });
  }
});

// Update task status and progress (technician/manager)
router.put("/api/tasks/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const tokenData = getDataFromJWT(req);
    
    const task = await db.task.findUnique({
      where: { id }
    });
    
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    
    // Check permissions (technician assigned to task or manager who created it)
    if (task.assignedToId !== tokenData.id && tokenData.role !== "manager" && tokenData.role !== "admin") {
      return res.status(403).json({ message: "You don't have permission to update this task" });
    }
    
    const {
      status,
      progress,
      actualHours,
      notes,
      completedAt
    } = req.body;
    
    // If task is being completed, ensure progress is 100%
    let updateData = {
      status,
      progress,
      actualHours,
      notes
    };
    
    if (status === "completed") {
      updateData.progress = 100;
      updateData.completedAt = new Date();
    } else if (completedAt) {
      updateData.completedAt = new Date(completedAt);
    }
    
    const updatedTask = await db.task.update({
      where: { id },
      data: updateData
    });
    
    // Check if all tasks for work order are completed
    if (status === "completed") {
      const allTasks = await db.task.findMany({
        where: { workOrderId: task.workOrderId }
      });
      
      const allCompleted = allTasks.every(t => t.status === "completed" || t.id === id);
      
      if (allCompleted) {
        await db.workOrder.update({
          where: { id: task.workOrderId },
          data: {
            status: "completed",
            completedAt: new Date()
          }
        });
      }
    }
    
    return res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Error updating task" });
  }
});

// Delete task (manager only)
router.delete("/api/tasks/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const tokenData = getDataFromJWT(req);
    
    // Check if user is a manager or admin
    if (tokenData.role !== "manager" && tokenData.role !== "admin") {
      return res.status(403).json({ message: "Only managers can delete tasks" });
    }
    
    await db.task.delete({
      where: { id }
    });
    
    return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Error deleting task" });
  }
});

export { router as taskRouter };
