document.addEventListener('DOMContentLoaded', () => {
    loadWorkOrders();
    setupEventListeners();
    initAnimations();
});

let taskIdToUpdate = null;

async function loadWorkOrders() {
    try {
        const response = await fetch('/api/technician/workorders', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Failed to fetch work orders');
        const workOrders = await response.json();
        displayWorkOrders(workOrders);
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
            <td>${order.workOrderTitle}</td>
            <td>${order.description}</td>
            <td>${order.assignedBy}</td>
            <td>${order.status}</td>
            <td>${order.priority}</td>
            <td>${new Date(order.assignedDate).toLocaleDateString()}</td>
            <td>${new Date(order.dueDate).toLocaleDateString()}</td>
            <td>
                <button onclick='showModal("${order.id}")' class="view-btn">Update Status</button>
            </td>
        `;
        tbody.appendChild(row);
        
        // Animate each row
        animateWorkOrder(row, index);
    });
}

async function updateTaskStatus(taskId, updateData) {
    try {
        const response = await fetch(`/api/technician/tasks/${taskId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
                status: updateData.status,
                comments: updateData.comments,
                actualTime: updateData.status === 'COMPLETED' ? 
                    parseFloat(document.getElementById('actualHours').value) : null
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || error.error || 'Failed to update status');
        }

        const result = await response.json();
        await loadWorkOrders();
        closeModal();
        showNotification(`Status updated to ${updateData.status} successfully`, 'success');
    } catch (error) {
        console.error('Error updating task:', error);
        showNotification(error.message, 'error');
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

    document.getElementById('updateStatus').addEventListener('click', async () => {
        const status = statusSelect.value;
        const updateData = { status };

        switch (status) {
            case 'COMPLETED':
                const completedDate = document.getElementById('completedDate').value;
                const actualTime = document.getElementById('actualHours').value;
                
                if (!completedDate || !actualTime) {
                    showNotification('Please fill all completion details', 'error');
                    return;
                }
                
                updateData.completedDate = completedDate;
                updateData.actualTime = parseFloat(actualTime);
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
                break;
        }

        await updateTaskStatus(taskIdToUpdate, updateData);
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
