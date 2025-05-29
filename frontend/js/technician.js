document.addEventListener('DOMContentLoaded', () => {
    loadWorkOrders();
    setupEventListeners();
    initAnimations();
});

let teaskIdToUpdate = null;

async function loadWorkOrders() {
    try {
        const response = await fetch(`/api/technician/workorders`, { // Corrected endpoint
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        });
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

async function updateTaskStatus(orderId, status, issueDescription = null) {
    if (!orderId){
        return;
    }
    try {
        const response = await fetch(`/api/technician/tasks/${orderId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({ status, issueDescription })
        });
        
        if (response.ok) {
            loadWorkOrders();
            closeModal();
        }
    } catch (error) {
        console.error('Error updating work order:', error);
    } finally{
        teaskIdToUpdate = null;
    }
}


function closeModal(){
    teaskIdToUpdate = null;
    document.getElementById('statusUpdate')?.close();
}

// Event listeners and modal handling functions
function setupEventListeners() {
    const statusUpdate = document.getElementById('statusUpdate');
    statusUpdate.addEventListener('change', (e) => {
        const issueBox = document.getElementById('issueReportBox');
        issueBox.style.display = e.target.value === 'issue' ? 'block' : 'none';
    });

    document.getElementById('updateStatus').addEventListener('click', () => {
        const orderId = document.getElementById('workOrderDetails').dataset.orderId;
        const status = document.getElementById('statusUpdate').value;
        const issueDescription = document.getElementById('issueDescription').value;
        updateTaskStatus(teaskIdToUpdate, status, issueDescription);

        gsap.to(".status-update", {
            duration: 0.3,
            scale: 1.1,
            yoyo: true,
            repeat: 1
        });
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
    teaskIdToUpdate = taskId;
    const modal = document.getElementById('workOrderModal').showModal();
    // modal.style.display = 'block';
    
    gsap.from(".modal-content", {
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)"
    });
}
