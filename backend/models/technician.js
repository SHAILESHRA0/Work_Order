const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        enum: ['Mechanical', 'Electrical', 'Body Work', 'General']
    },
    specializations: [{
        type: String
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

// Add indexes for common queries
technicianSchema.index({ department: 1, isActive: 1 });
technicianSchema.index({ name: 1 });

module.exports = mongoose.model('Technician', technicianSchema);
