// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadManagerTasks();
    loadTechnicianProgress();
    loadTechnicians();
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', filterTasks);
    document.getElementById('statusFilter').addEventListener('change', filterTasks);
    
    // Add event listeners for assign buttons
    document.querySelectorAll('.assign-btn').forEach(btn => {
        btn.addEventListener('click', assignTask);
    });
});

async function loadManagerTasks() {
    try {
        const response = await fetch('/api/supervisor/tasks');
        const tasks = await response.json();
        
        const tasksList = document.getElementById('managerTasksList');
        tasksList.innerHTML = tasks.map(task => `
            <tr>
                <td>${task.taskId}</td>
                <td>${task.description}</td>
                <td>${task.priority}</td>
                <td>${new Date(task.dueDate).toLocaleDateString()}</td>
                <td>${task.status}</td>
                <td><button onclick="reviewTask('${task.taskId}')">Review</button></td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

async function loadTechnicianProgress() {
    try {
        const response = await fetch('/api/supervisor/progress');
        const progress = await response.json();
        
        const progressList = document.getElementById('progressList');
        progressList.innerHTML = progress.map(p => `
            <tr>
                <td>${p.assignedTechnician.name}</td>
                <td>${p.taskId}</td>
                <td>
                    <progress value="${p.progress}" max="100"></progress> 
                    ${p.progress}%
                </td>
                <td>${p.status}</td>
                <td>${formatTimeSpent(p.timeSpent)}</td>
                <td>
                    <button onclick="viewDetails('${p.taskId}')">Details</button>
                    <button onclick="contactTech('${p.assignedTechnician._id}')">Contact</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading progress:', error);
    }
}

// Load available technicians
async function loadTechnicians() {
    try {
        const response = await fetch('/api/supervisor/technicians');
        const technicians = await response.json();
        
        const technicianSelects = document.querySelectorAll('.technician-select');
        technicianSelects.forEach(select => {
            select.innerHTML = `
                <option value="">Select Technician</option>
                ${technicians.map(tech => `
                    <option value="${tech._id}">${tech.name}</option>
                `).join('')}
            `;
        });
    } catch (error) {
        console.error('Error loading technicians:', error);
    }
}

async function assignTask(event) {
    const row = event.target.closest('tr');
    const techSelect = row.querySelector('.technician-select');
    const taskId = row.cells[0].textContent;
    
    if (!techSelect.value) {
        alert('Please select a technician');
        return;
    }
    
    try {
        const response = await fetch(`/api/supervisor/assign/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Add token if using JWT
            },
            body: JSON.stringify({
                technicianId: techSelect.value
            })
        });
        
        if (response.ok) {
            const updatedTask = await response.json();
            row.cells[4].textContent = 'Assigned';
            event.target.disabled = true;
            
            // Update the UI to show assignment
            techSelect.disabled = true;
            
            // Refresh the technician list and progress
            loadTechnicians();
            loadTechnicianProgress();
            
            // Show success message
            showNotification('Task assigned successfully');
        } else {
            throw new Error('Failed to assign task');
        }
    } catch (error) {
        console.error('Error assigning task:', error);
        showNotification('Failed to assign task', 'error');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function filterTasks() {
    // Implement search and filter functionality
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    
    // Add filtering logic here
}

function reviewTask(taskId) {
    // Implement task review functionality
    alert(`Reviewing task ${taskId}`);
}

function viewDetails(taskId) {
    // Implement view details functionality
    alert(`Viewing details for task ${taskId}`);
}

function contactTech(techName) {
    // Implement contact functionality
    alert(`Contacting ${techName}`);
}

function formatTimeSpent(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}
