// Dashboard Data Management
class DashboardManager {
    constructor() {
        this.statsElements = {
            totalOrders: document.querySelector('[data-stat="total-orders"]'),
            pending: document.querySelector('[data-stat="pending"]'),
            completed: document.querySelector('[data-stat="completed"]'),
            urgent: document.querySelector('[data-stat="urgent"]')
        };
        this.workordersTable = document.querySelector('.workorders-table');
        this.init();
    }

    async init() {
        await this.loadDashboardStats();
        await this.loadRecentWorkorders();
        this.setupRealTimeUpdates();
        this.setupEventListeners();
    }

    async loadDashboardStats() {
        try {
            const response = await fetch('../backend/api/dashboard-stats.php');
            const stats = await response.json();
            this.updateStats(stats);
        } catch (error) {
            console.error('Failed to load dashboard stats:', error);
        }
    }

    async loadRecentWorkorders() {
        try {
            const response = await fetch('../backend/api/recent-workorders.php');
            const workorders = await response.json();
            this.renderWorkordersTable(workorders);
        } catch (error) {
            console.error('Failed to load recent workorders:', error);
        }
    }

    updateStats(stats) {
        Object.keys(this.statsElements).forEach(key => {
            if (this.statsElements[key] && stats[key] !== undefined) {
                this.statsElements[key].textContent = stats[key];
                this.animateValue(this.statsElements[key], stats[key]);
            }
        });
    }

    renderWorkordersTable(workorders) {
        const tableContent = workorders.map(order => `
            <tr data-id="${order.id}">
                <td>#${order.id}</td>
                <td>${order.asset}</td>
                <td><span class="status-badge ${order.status.toLowerCase()}">${order.status}</span></td>
                <td>${order.assignedTo}</td>
                <td>
                    <button class="action-btn edit" onclick="dashboard.editWorkorder(${order.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn view" onclick="dashboard.viewWorkorder(${order.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        this.workordersTable.querySelector('tbody').innerHTML = tableContent;
    }

    setupRealTimeUpdates() {
        // WebSocket connection for real-time updates
        const ws = new WebSocket('ws://your-websocket-server');
        
        ws.onmessage = (event) => {
            const update = JSON.parse(event.data);
            if (update.type === 'stats') {
                this.updateStats(update.data);
            } else if (update.type === 'workorder') {
                this.handleWorkorderUpdate(update.data);
            }
        };
    }

    setupEventListeners() {
        // New order button
        document.querySelector('.new-order-btn').addEventListener('click', () => {
            this.createNewWorkorder();
        });

        // Search functionality
        const searchInput = document.querySelector('.search-bar input');
        searchInput.addEventListener('input', this.debounce(() => {
            this.searchWorkorders(searchInput.value);
        }, 300));
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    animateValue(element, value) {
        element.classList.add('updating');
        setTimeout(() => element.classList.remove('updating'), 1000);
    }
}

// Initialize dashboard
const dashboard = new DashboardManager();
