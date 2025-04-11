const mongoose = require('mongoose');

const workOrderSchema = new mongoose.Schema({
    woNumber: { type: String, required: true, unique: true },
    area: { type: String, required: true },
    maintenanceType: { type: String, required: true },
    priority: { type: String, required: true },
    assignedTo: { type: String, required: true },
    spareParts: [String],
    safetyTools: [String],
    tasks: [String],
    resources: [String],
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, default: 'Pending' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' }
}, { timestamps: true });

module.exports = mongoose.model('WorkOrder', workOrderSchema);