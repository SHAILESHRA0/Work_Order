// ...existing code...

// Technician Panel Functions
async function loadWorkOrders() {
    const response = await fetch('http://localhost:5502/api/workorders'); // Corrected API URL
    const workOrders = await response.json();
    const historyTableBody = document.getElementById('historyTableBody');
    historyTableBody.innerHTML = '';
    workOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.equipmentId}</td>
            <td>${order.area}</td>
            <td>${order.woNumber}</td>
            <td>${order.maintenanceType}</td>
            <td>${order.priority}</td>
            <td>${new Date(order.startTime).toLocaleString()}</td>
            <td>${new Date(order.endTime).toLocaleString()}</td>
        `;
        historyTableBody.appendChild(row);
    });
}

function loadTechnicianWorkOrders() {
    const workOrdersList = document.getElementById('workOrdersList');
    if (!workOrdersList) return;

    // Mock data - replace with actual API call
    const workOrders = [
        { id: 1, description: "Fix AC Unit", assignedBy: "manager", dueDate: "2023-12-25", status: "pending" },
        { id: 2, description: "Electrical Repair", assignedBy: "supervisor", dueDate: "2023-12-26", status: "in-progress" }
    ];

    workOrdersList.innerHTML = workOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.description}</td>
            <td>${order.assignedBy}</td>
            <td>${order.dueDate}</td>
            <td>${order.status}</td>
            <td><button onclick="showWorkOrderDetails(${order.id})">View Details</button></td>
        </tr>
    `).join('');
}

function showWorkOrderDetails(orderId) {
    const modal = document.getElementById('workOrderModal');
    const details = document.getElementById('workOrderDetails');
    modal.style.display = "block";
    
    // Mock data - replace with actual order details
    details.innerHTML = `
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Description:</strong> Sample work order description</p>
        <p><strong>Location:</strong> Building A, Floor 2</p>
    `;
}

// Event Listeners for Technician Panel
document.addEventListener('DOMContentLoaded', function() {
    loadTechnicianWorkOrders();
    loadWorkOrders();

    const statusFilter = document.getElementById('statusFilter');
    const assignedByFilter = document.getElementById('assignedBy');
    const modal = document.getElementById('workOrderModal');
    const closeBtn = document.querySelector('.close');
    const statusUpdate = document.getElementById('statusUpdate');
    const issueReportBox = document.getElementById('issueReportBox');
    const updateStatusBtn = document.getElementById('updateStatus');

    if (statusFilter) {
        statusFilter.addEventListener('change', loadTechnicianWorkOrders);
    }

    if (assignedByFilter) {
        assignedByFilter.addEventListener('change', loadTechnicianWorkOrders);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    if (statusUpdate) {
        statusUpdate.addEventListener('change', (e) => {
            issueReportBox.style.display = e.target.value === 'issue' ? 'block' : 'none';
        });
    }

    if (updateStatusBtn) {
        updateStatusBtn.addEventListener('click', () => {
            // Add status update logic here
            modal.style.display = "none";
        });
    }
});