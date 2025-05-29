// ...existing code...

async function createWorkOrder(formData) {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            const response = await fetch('/api/workorders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.details || 'Failed to create work order');
            }

            // Show success message and refresh list
            showNotification('Work order created successfully', 'success');
            await loadWorkOrders();

            return result.data;
        } catch (error) {
            attempt++;
            if (error.message.includes('deadlock') && attempt < maxRetries) {
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                continue;
            }
            console.error('Error creating work order:', error);
            showNotification(error.message, 'error');
            throw error;
        }
    }
}

async function loadTechnicians(department) {
    try {
        const response = await fetch(`/api/technicians?department=${department}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to load technicians');
        }

        const technicians = await response.json();
        return technicians;
    } catch (error) {
        showNotification('Failed to load technicians', 'error');
        throw error;
    }
}

async function loadWorkOrders() {
    try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            window.location.href = '/login.html';
            return;
        }

        const response = await fetch("/api/workorders/list", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server returned non-JSON response');
        }

        const workOrders = await response.json();

        if (!workOrders.success) {
            throw new Error(workOrders.error || 'Failed to fetch work orders');
        }

        const data = workOrders.data || [];
        const tbody = document.getElementById('historyTableBody');
        
        if (!tbody) {
            console.error('History table body element not found');
            return;
        }

        if (data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="11" class="text-center">No work orders found</td></tr>';
            return;
        }

        tbody.innerHTML = data.map(wo => `
            <tr>
                <td>${wo.orderNumber || 'N/A'}</td>
                <td>${wo.title || 'N/A'}</td>
                <td>${wo.vehicle?.model || 'N/A'}</td>
                <td>${wo.vehicle?.licensePlate || 'N/A'}</td>
                <td>${wo.department || 'N/A'}</td>
                <td>${wo.priority || 'N/A'}</td>
                <td>${wo.assignedTo?.name || 'Unassigned'}</td>
                <td><span class="status-badge ${(wo.status || '').toLowerCase()}">${wo.status || 'N/A'}</span></td>
                <td>${formatDate(wo.startDate)}</td>
                <td>${formatDate(wo.dueDate)}</td>
                <td>
                    <button onclick="editWorkOrder('${wo.id}')" class="btn-edit">Edit</button>
                    <button onclick="deleteWorkOrder('${wo.id}')" class="btn-delete">Delete</button>
                </td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Error loading work orders:', error);
        const tbody = document.getElementById('historyTableBody');
        if (tbody) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="11" class="text-center text-error">
                        Error loading work orders: ${error.message}
                    </td>
                </tr>
            `;
        }
    }
}

function renderWorkOrders(workOrders) {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;

    if (!Array.isArray(workOrders) || workOrders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="11" class="text-center">No work orders found</td></tr>';
        return;
    }

    tbody.innerHTML = workOrders.map(wo => `
        <tr>
            <td>${wo.orderNumber || 'N/A'}</td>
            <td>${wo.title || 'N/A'}</td>
            <td>${wo.vehicle?.model || 'N/A'}</td>
            <td>${wo.vehicle?.licensePlate || 'N/A'}</td>
            <td>${wo.department || 'N/A'}</td>
            <td>${wo.priority || 'N/A'}</td>
            <td>${wo.assignedTo?.name || 'Unassigned'}</td>
            <td><span class="status-badge ${(wo.status || '').toLowerCase()}">${wo.status || 'N/A'}</span></td>
            <td>${formatDate(wo.startDate)}</td>
            <td>${formatDate(wo.dueDate)}</td>
            <td>
                <button onclick="editWorkOrder('${wo.id}')" class="btn-edit">Edit</button>
                <button onclick="deleteWorkOrder('${wo.id}')" class="btn-delete">Delete</button>
            </td>
        </tr>
    `).join('');
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    try {
        return new Date(dateString).toLocaleString();
    } catch (error) {
        return 'Invalid Date';
    }
}

// Add event listeners and initialize
document.addEventListener('DOMContentLoaded', () => {
    const workOrderForm = document.getElementById('workorderForm');
    const departmentSelect = document.getElementById('department');
    
    // Load technicians when department changes
    departmentSelect.addEventListener('change', async (e) => {
        try {
            const technicians = await loadTechnicians(e.target.value);
            updateTechnicianSelect(technicians);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Handle form submission
    workOrderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const workOrderData = {
                title: formData.get('title'),
                description: formData.get('description'),
                department: formData.get('department'),
                orderNumber: formData.get('woNumber'),
                priority: formData.get('priority'),
                startDate: formData.get('startDate'),
                dueDate: formData.get('dueDate'),
                vehicle: {
                    model: formData.get('carModel'),
                    licensePlate: formData.get('licensePlate')
                }
            };

            await createWorkOrder(workOrderData);
            e.target.reset();
            await loadWorkOrders(); // Refresh the list after creation

        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification(error.message, 'error');
        }
    });

    // Initialize work order list
    loadWorkOrders();

    // Set up auto-refresh
    setInterval(loadWorkOrders, 30000); // Refresh every 30 seconds
});