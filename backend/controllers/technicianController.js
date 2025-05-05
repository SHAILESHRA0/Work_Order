const { WorkOrder } = require('../models/WorkOrder');

const technicianController = {
    async getAssignedWorkOrders(req, res) {
        try {
            const workOrders = await WorkOrder.find({ 
                assignedToId: req.user.id,
                status: { $nin: ['COMPLETED', 'REJECTED'] }
            }).sort('-createdAt');
            res.json({ success: true, data: workOrders });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    },

    async updateWorkOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, issueDetails } = req.body;
            
            const workOrder = await WorkOrder.findById(id);
            if (!workOrder) {
                return res.status(404).json({ success: false, error: 'Work order not found' });
            }

            workOrder.status = status;
            if (status === 'ISSUE_REPORTED') {
                workOrder.issueDetails = {
                    description: issueDetails,
                    reportedAt: new Date()
                };
            }

            workOrder.statusHistory.push({
                status,
                updatedById: req.user.id,
                details: issueDetails
            });

            await workOrder.save();
            res.json({ success: true, data: workOrder });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
};

module.exports = technicianController;
