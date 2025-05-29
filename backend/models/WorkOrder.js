import pkg from '@prisma/client';
import mongoose from 'mongoose';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const WORKFLOW_STATUS = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS', 
    COMPLETED: 'COMPLETED',
    BLOCKED: 'BLOCKED',
    NEEDS_REVIEW: 'NEEDS_REVIEW',
    REVIEWED: 'REVIEWED',
    ON_HOLD: 'ON_HOLD'
};

const WORK_ORDER_STATUS = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    IN_REVIEW: 'IN_REVIEW',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    ASSIGNED: 'ASSIGNED',
    IN_PROGRESS: 'IN_PROGRESS',
    ON_HOLD: 'ON_HOLD',
    BLOCKED: 'BLOCKED',
    NEEDS_INFO: 'NEEDS_INFO',
    ISSUE_REPORTED: 'ISSUE_REPORTED',
    COMPLETED: 'COMPLETED',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED',
    TECHNICIAN_ASSIGNED: 'TECHNICIAN_ASSIGNED'
};

const WORKFLOW_STEPS = {
    CREATED: 'CREATED',
    SUBMITTED: 'SUBMITTED',
    IN_REVIEW: 'IN_REVIEW',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    ASSIGNED: 'ASSIGNED',
    IN_PROGRESS: 'IN_PROGRESS',
    ON_HOLD: 'ON_HOLD',
    COMPLETED: 'COMPLETED',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED'
};

const workOrderSchema = new mongoose.Schema({
    id: String,
    orderNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: { 
        type: String,
        required: true,
        trim: true,
        index: true // Keep index without uniqueness
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: ['ELECTRICAL', 'MECHANICAL', 'ELECTRONICS', 'MAINTENANCE', 'OPERATIONS', 'PRODUCTION', 'QUALITY', 'IT', 'GENERAL']
    },
    startDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > this.startDate;
            },
            message: 'Due date must be after start date'
        }
    },
    estimatedHours: {
        type: Number,
        min: 0
    },
    actualHours: {
        type: Number,
        min: 0
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        default: 'MEDIUM'
    },
    status: {
        type: String,
        enum: Object.values(WORK_ORDER_STATUS),
        default: WORK_ORDER_STATUS.PENDING
    },
    issueDetails: {
        description: String,
        reportedAt: Date,
        resolvedAt: Date
    },
    statusHistory: [{
        status: String,
        updatedById: String,
        updatedAt: { type: Date, default: Date.now },
        details: String
    }],
    approvalDetails: {
        approvedById: String,
        approvedAt: Date,
        rejectedById: String,
        rejectedAt: Date,
        comments: String
    },
    vehicleDetails: {
        model: String,
        licensePlate: String,
        repairType: String
    },
    maintenanceDetails: {
        requiredParts: [String],
        safetyTools: [String],
        procedures: [String]
    },
    workflowSteps: [{
        step: String,
        status: String,
        completedBy: String, 
        completedAt: Date,
        notes: String
    }],
    currentStep: {
        type: String,
        enum: ['CREATED', 'ASSIGNED', 'IN_PROGRESS', 'REVIEW', 'APPROVED', 'REJECTED', 'COMPLETED'],
        default: 'CREATED'
    },
    createdAt: { type: Date, default: Date.now },
    workflow: {
        currentStep: {
            type: String,
            enum: Object.values(WORKFLOW_STEPS),
            default: WORKFLOW_STEPS.DRAFT
        },
        stepHistory: [{
            step: String,
            status: String,
            actorId: String,
            actedAt: Date,
            comments: String
        }],
        assignedTeams: [{
            teamId: String,
            assignedAt: Date,
            role: String
        }],
        reviewers: [{
            userId: String,
            reviewedAt: Date,
            decision: String,
            comments: String
        }],
        metrics: {
            timeInCurrentStep: Number,
            totalProcessingTime: Number,
            handoffs: Number
        }
    },
    assignedTechnician: {
        technicianId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Technician'
        },
        assignedAt: Date,
        assignedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        startedAt: Date,
        completedAt: Date,
        notes: String
    }
});

// Remove old duplicate canTransitionTo method and replace with:
workOrderSchema.methods.canTransitionTo = function(nextStep) {
    const validTransitions = {
        [WORKFLOW_STEPS.DRAFT]: [WORKFLOW_STEPS.SUBMITTED],
        [WORKFLOW_STEPS.SUBMITTED]: [WORKFLOW_STEPS.IN_REVIEW, WORKFLOW_STEPS.REJECTED],
        [WORKFLOW_STEPS.IN_REVIEW]: [WORKFLOW_STEPS.APPROVED, WORKFLOW_STEPS.REJECTED],
        [WORKFLOW_STEPS.APPROVED]: [WORKFLOW_STEPS.ASSIGNED],
        [WORKFLOW_STEPS.ASSIGNED]: [WORKFLOW_STEPS.IN_PROGRESS],
        [WORKFLOW_STEPS.IN_PROGRESS]: [WORKFLOW_STEPS.COMPLETED, WORKFLOW_STEPS.REJECTED],
        [WORKFLOW_STEPS.COMPLETED]: [],
        [WORKFLOW_STEPS.REJECTED]: [WORKFLOW_STEPS.DRAFT]
    };

    return validTransitions[this.workflow.currentStep]?.includes(nextStep) || false;
};

workOrderSchema.methods.progressWorkflow = async function(nextStep, actorId, comments = '') {
    try {
        if (!this.canTransitionTo(nextStep)) {
            console.log(`[WorkOrder ${this.id}] Invalid transition attempted: ${this.workflow.currentStep} -> ${nextStep}`);
            throw new Error(`Invalid workflow transition from ${this.workflow.currentStep} to ${nextStep}`);
        }

        const now = new Date();
        console.log(`[WorkOrder ${this.id}] Transitioning from ${this.workflow.currentStep} to ${nextStep}`);

        this.workflow.stepHistory.push({
            step: nextStep,
            status: 'COMPLETED',
            actorId: actorId,
            actedAt: now,
            comments: comments
        });

        this.workflow.currentStep = nextStep;
        this.workflow.metrics.timeInCurrentStep = 0;
        this.workflow.metrics.handoffs += 1;
        
        const savedOrder = await this.save();
        console.log(`[WorkOrder ${this.id}] Successfully transitioned to ${nextStep}`);
        return savedOrder;
    } catch (error) {
        console.error(`[WorkOrder ${this.id}] Error in workflow transition:`, error);
        throw error;
    }
};

// Add workflow status validation method
workOrderSchema.methods.validateWorkflowStatus = function(status) {
    const currentStatus = this.status;
    if (!currentStatus) {
        console.warn(`[WorkOrder ${this.id}] Current status is undefined`);
        return false;
    }

    const validTransitions = {
        [WORK_ORDER_STATUS.DRAFT]: [WORK_ORDER_STATUS.SUBMITTED, WORK_ORDER_STATUS.CANCELLED],
        [WORK_ORDER_STATUS.SUBMITTED]: [WORK_ORDER_STATUS.IN_REVIEW, WORK_ORDER_STATUS.NEEDS_INFO, WORK_ORDER_STATUS.REJECTED],
        [WORK_ORDER_STATUS.IN_REVIEW]: [WORK_ORDER_STATUS.PENDING_APPROVAL, WORK_ORDER_STATUS.NEEDS_INFO, WORK_ORDER_STATUS.REJECTED],
        [WORK_ORDER_STATUS.PENDING_APPROVAL]: [WORK_ORDER_STATUS.APPROVED, WORK_ORDER_STATUS.REJECTED],
        [WORK_ORDER_STATUS.APPROVED]: [WORK_ORDER_STATUS.TECHNICIAN_ASSIGNED, WORK_ORDER_STATUS.CANCELLED],
        [WORK_ORDER_STATUS.TECHNICIAN_ASSIGNED]: [WORK_ORDER_STATUS.IN_PROGRESS, WORK_ORDER_STATUS.ON_HOLD],
        [WORK_ORDER_STATUS.ASSIGNED]: [WORK_ORDER_STATUS.IN_PROGRESS, WORK_ORDER_STATUS.ON_HOLD],
        [WORK_ORDER_STATUS.IN_PROGRESS]: [WORK_ORDER_STATUS.COMPLETED, WORK_ORDER_STATUS.BLOCKED, WORK_ORDER_STATUS.ISSUE_REPORTED],
        [WORK_ORDER_STATUS.BLOCKED]: [WORK_ORDER_STATUS.IN_PROGRESS, WORK_ORDER_STATUS.CANCELLED],
        [WORK_ORDER_STATUS.NEEDS_INFO]: [WORK_ORDER_STATUS.SUBMITTED],
        [WORK_ORDER_STATUS.ISSUE_REPORTED]: [WORK_ORDER_STATUS.IN_PROGRESS, WORK_ORDER_STATUS.CANCELLED]
    };

    const isValid = validTransitions[currentStatus]?.includes(status) || false;
    if (!isValid) {
        console.log(`[WorkOrder ${this.id}] Invalid status transition: ${currentStatus} -> ${status}`);
    }
    return isValid;
};

// Add method to update workflow status
workOrderSchema.methods.updateWorkflowStatus = async function(newStatus, userId, comments = '') {
    if (!this.validateWorkflowStatus(newStatus)) {
        throw new Error(`Invalid status transition from ${this.status} to ${newStatus}`);
    }

    const statusUpdate = {
        status: newStatus,
        updatedById: userId,
        updatedAt: new Date(),
        details: comments
    };

    this.statusHistory.push(statusUpdate);
    this.status = newStatus;

    if (newStatus === WORK_ORDER_STATUS.COMPLETED) {
        this.completedAt = new Date();
    }

    return this.save();
};

// Add technician assignment method
workOrderSchema.methods.assignTechnician = async function(technicianId, assignedBy, notes = '') {
    if (this.status !== WORK_ORDER_STATUS.APPROVED) {
        throw new Error('Work order must be approved before assigning technician');
    }

    this.assignedTechnician = {
        technicianId,
        assignedAt: new Date(),
        assignedBy,
        notes
    };

    await this.updateWorkflowStatus(WORK_ORDER_STATUS.TECHNICIAN_ASSIGNED, assignedBy, 
        `Technician ${technicianId} assigned to work order`);
    
    return this.save();
};

// Add a pre-save hook to generate unique order number if not provided
workOrderSchema.pre('save', async function(next) {
    if (this.isNew && !this.orderNumber) {
        // Generate order number based on timestamp and random string
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2, 7);
        this.orderNumber = `WO-${timestamp}-${random}`.toUpperCase();
    }
    
    if (this.isNew) {
        this.version = 1;
    } else if (this.isModified()) {
        this.version += 1;
    }
    next();
});

const WorkOrder = mongoose.model('WorkOrder', workOrderSchema);

export {
    prisma, WORK_ORDER_STATUS,
    WORKFLOW_STEPS, WorkOrder
};

