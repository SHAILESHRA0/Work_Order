const { WorkOrder } = require('../models/WorkOrder');

const supervisorController = {
    async getWorkOrders(req, res) {
        try {
            const workOrders = await WorkOrder.find({
                departmentId: req.user.departmentId
            }).populate('assignedTo').sort('-createdAt');
            res.json({ success: true, data: workOrders });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async assignWorkOrder(req, res) {
        try {
            const { workOrderId, technicianId } = req.body;
            const workOrder = await WorkOrder.findById(workOrderId);
            
            if (!workOrder) {
                return res.status(404).json({ success: false, error: 'Work order not found' });
            }

            workOrder.assignedToId = technicianId;
            workOrder.status = 'ASSIGNED';
            workOrder.statusHistory.push({
                status: 'ASSIGNED',
                updatedById: req.user.id,
                details: `Assigned to technician ${technicianId}`
            });

            await workOrder.save();
            res.json({ success: true, data: workOrder });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = supervisorController;
