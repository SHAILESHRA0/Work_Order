const WorkOrder = require('./models/WorkOrder'); // Use the WorkOrder model for MongoDB operations

async function assignWorkOrderToTechnician(workOrderId, technicianId) {
    try {
        const workOrder = await WorkOrder.findById(workOrderId);
        if (!workOrder) {
            throw new Error('Work order not found');
        }
        workOrder.assignedTo = technicianId;
        workOrder.status = 'Assigned';
        await workOrder.save();
        return workOrder;
    } catch (error) {
        console.error('Error assigning work order:', error);
        throw error;
    }
}

async function getManagerTasks() {
    try {
        const tasks = await WorkOrder.find({ status: 'Pending' });
        return tasks;
    } catch (error) {
        console.error('Error fetching manager tasks:', error);
        throw error;
    }
}

module.exports = { assignWorkOrderToTechnician, getManagerTasks };
