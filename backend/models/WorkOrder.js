const mongoose = require('mongoose');

const workOrderSchema = new mongoose.Schema({
    id: String,
    description: String,
    assignedBy: String,
    assignedTo: String,
    dueDate: Date,
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'issue'],
        default: 'pending'
    },
    issueDescription: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WorkOrder', workOrderSchema);
