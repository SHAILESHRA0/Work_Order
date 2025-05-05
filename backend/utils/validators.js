const validateDate = (dateString) => {
  if (!dateString) return false;
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

const VALID_DEPARTMENTS = ['ELECTRICAL', 'MECHANICAL', 'ELECTRONICS', 'MAINTENANCE', 'OPERATIONS', 'PRODUCTION', 'QUALITY', 'IT', 'GENERAL'];
const VALID_PRIORITIES = ['HIGH', 'MEDIUM', 'LOW'];
const VALID_STATUSES = ['PENDING', 'ASSIGNED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED', 'ON_HOLD'];

const validateWorkOrder = (data) => {
  const errors = [];
  
  // Basic field validation
  if (!data.title?.trim()) {
    errors.push('Title is required');
  } else if (data.title.length < 3) {
    errors.push('Title must be at least 3 characters long');
  }
  
  if (!data.description?.trim()) {
    errors.push('Description is required');
  } else if (data.description.length < 10) {
    errors.push('Description must be at least 10 characters long');
  }

  if (!data.department) {
    errors.push('Department is required');
  } else if (!VALID_DEPARTMENTS.includes(data.department)) {
    errors.push(`Department must be one of: ${VALID_DEPARTMENTS.join(', ')}`);
  }

  // Date validation
  if (data.startDate && !validateDate(data.startDate)) {
    errors.push('Invalid start date format');
  }

  if (data.dueDate && !validateDate(data.dueDate)) {
    errors.push('Invalid due date format');
  }

  if (data.startDate && data.dueDate) {
    const start = new Date(data.startDate);
    const due = new Date(data.dueDate);
    if (due < start) {
      errors.push('Due date cannot be earlier than start date');
    }
  }

  // Priority validation
  if (data.priority && !VALID_PRIORITIES.includes(data.priority)) {
    errors.push(`Priority must be one of: ${VALID_PRIORITIES.join(', ')}`);
  }

  // Status validation
  if (data.status && !VALID_STATUSES.includes(data.status)) {
    errors.push(`Status must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  // Vehicle data validation
  if (data.vehicleData) {
    if (!data.vehicleData.model?.trim()) {
      errors.push('Vehicle model is required when vehicle data is provided');
    }
    if (!data.vehicleData.licensePlate?.trim()) {
      errors.push('Vehicle license plate is required when vehicle data is provided');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateDate,
  validateWorkOrder,
  VALID_DEPARTMENTS,
  VALID_PRIORITIES,
  VALID_STATUSES
};
