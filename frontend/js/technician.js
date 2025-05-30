document.addEventListener('DOMContentLoaded', () => {
    loadWorkOrders();
    setupEventListeners();
    initAnimations();
});

let taskIdToUpdate = null;

async function loadWorkOrders() {
    try {
        const token = sessionStorage.getItem('token');
        const response = await fetch('/api/technician/workorders', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Failed to fetch work orders');
        const data = await response.json();
        displayWorkOrders(data.data || []);
    } catch (error) {
        console.error('Error loading work orders:', error);
    }
}

function displayWorkOrders(workOrders) {
    const tbody = document.getElementById('workOrdersList');
    tbody.innerHTML = '';
    
    workOrders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.className = 'work-order-row';
        row.innerHTML = `
            <td>${order.orderNumber}</td>
            <td>${order.title}</td>
            <td>${order.description}</td>
            <td>${order.equipment || 'N/A'}</td>
            <td>${order.vehicle ? `${order.vehicle.model} (${order.vehicle.licensePlate})` : 'N/A'}</td>
            <td>${order.priority}</td>
            <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
            <td>${new Date(order.dueDate).toLocaleString()}</td>
            <td>${order.estimatedHours || 'N/A'}</td>
            <td>
                <button onclick='showModal("${order.id}")' class="view-btn">Update Status</button>
            </td>
        `;
        tbody.appendChild(row);
        animateWorkOrder(row, index);
    });

    if (workOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center">No work orders assigned</td></tr>';
    }
}

async function updateTaskStatus(taskId, updateData) {
    try {
        if (!taskId) {
            throw new Error('Work order ID is required');
        }

        // Prepare update data with correct field names
        const payload = {
            status: updateData.status,
            comments: updateData.comments
        };

        // Add completion details if completing
        if (updateData.status === 'COMPLETED') {
            payload.completedDate = updateData.completedDate;
            payload.actualHours = updateData.actualHours ? parseFloat(updateData.actualHours) : undefined;
        }

        const response = await fetch(`/api/technician/work-orders/${taskId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const error = await response.json();
                throw new Error(error.details || error.message || 'Failed to update status');
            } else {
                throw new Error(`Server error: ${response.status}`);
            }
        }

        const result = await response.json();
        await loadWorkOrders();
        closeModal();
        showNotification(`Work order status updated to ${updateData.status}`, 'success');
    } catch (error) {
        console.error('Error updating task:', error);
        showNotification(error.message, 'error');
        throw error;
    }
}

function closeModal() {
    taskIdToUpdate = null;
    const modal = document.getElementById('workOrderModal');
    if (modal instanceof HTMLDialogElement) {
        modal.close();
    }
}

// Event listeners and modal handling functions
function setupEventListeners() {
    const statusSelect = document.getElementById('statusUpdate');
    const completionChecklist = document.getElementById('completionChecklist');
    const issueReportBox = document.getElementById('issueReportBox');
    const onHoldChecklist = document.getElementById('onHoldChecklist');
    
    statusSelect.addEventListener('change', (e) => {
        completionChecklist.style.display = e.target.value === 'COMPLETED' ? 'block' : 'none';
        issueReportBox.style.display = e.target.value === 'ISSUE_REPORTED' ? 'block' : 'none';
        onHoldChecklist.style.display = e.target.value === 'ON_HOLD' ? 'block' : 'none';
    });

    document.getElementById('updateStatus')?.addEventListener('click', async () => {
        const status = document.getElementById('statusUpdate').value;
        const updateData = { status };

        switch (status) {
            case 'COMPLETED':
                const completedDate = document.getElementById('completedDate').value;
                const actualHours = document.getElementById('actualHours').value;
                if (!completedDate || !actualHours) {
                    showNotification('Please fill all completion details', 'error');
                    return;
                }
                updateData.completedDate = completedDate;
                updateData.actualHours = actualHours;
                break;

            case 'ISSUE_REPORTED':
                const issueDescription = document.getElementById('issueDescription').value;
                if (!issueDescription.trim()) {
                    showNotification('Please describe the issue', 'error');
                    return;
                }
                updateData.comments = issueDescription;
                break;

            case 'ON_HOLD':
                const holdDescription = document.getElementById('holdDescription').value;
                const resumeDate = document.getElementById('resumeDate').value;
                if (!holdDescription.trim() || !resumeDate) {
                    showNotification('Please fill hold reason and resume date', 'error');
                    return;
                }
                updateData.comments = holdDescription;
                updateData.resumeDate = resumeDate;
                break;
        }

        try {
            await updateTaskStatus(window.currentWorkOrderId, updateData);
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    });

    // Update the event listener for the status update button
    document.getElementById('statusUpdate')?.addEventListener('change', (e) => {
        const statusChecklists = document.getElementById('statusChecklists');
        const completionChecklist = document.getElementById('completionChecklist');
        const issueReportBox = document.getElementById('issueReportBox');
        const onHoldChecklist = document.getElementById('onHoldChecklist');

        // Hide all checklists first
        [completionChecklist, issueReportBox, onHoldChecklist].forEach(el => {
            if (el) el.style.display = 'none';
        });

        // Show relevant checklist based on status
        switch (e.target.value) {
            case 'COMPLETED':
                if (completionChecklist) completionChecklist.style.display = 'block';
                break;
            case 'ISSUE_REPORTED':
                if (issueReportBox) issueReportBox.style.display = 'block';
                break;
            case 'ON_HOLD':
                if (onHoldChecklist) onHoldChecklist.style.display = 'block';
                break;
        }
    });
}

// Add animation functions
function initAnimations() {
    // Header animation
    gsap.from(".header-animate", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power3.out"
    });

    // Work orders section animation
    gsap.from(".fade-in", {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2
    });
}

function animateWorkOrder(element, index) {
    gsap.from(element, {
        duration: 0.5,
        opacity: 0,
        x: -50,
        delay: index * 0.1,
        ease: "power2.out"
    });
}

function showModal(taskId) {
    taskIdToUpdate = taskId;
    const modal = document.getElementById('workOrderModal').showModal();
    // modal.style.display = 'block';
    
    gsap.from(".modal-content", {
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)"
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}
