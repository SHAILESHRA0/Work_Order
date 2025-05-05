const WebSocket = require('ws');
const clients = new Map();

const notificationTypes = {
    WORK_ORDER_ASSIGNED: 'work_order_assigned',
    WORK_ORDER_UPDATED: 'work_order_updated',
    WORK_ORDER_COMPLETED: 'work_order_completed',
    ISSUE_REPORTED: 'issue_reported'
};

const sendNotification = async ({ userId, type, data }) => {
    const client = clients.get(userId);
    if (client && client.ws.readyState === WebSocket.OPEN) {
        client.ws.send(JSON.stringify({
            type,
            timestamp: new Date(),
            data
        }));
    }
};

const broadcastToRole = async (role, message) => {
    for (const [userId, client] of clients) {
        if (client.role === role && client.ws.readyState === WebSocket.OPEN) {
            client.ws.send(JSON.stringify(message));
        }
    }
};

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
        const userId = req.session.userId;
        const userRole = req.session.role;
        
        if (userId) {
            clients.set(userId, { ws, role: userRole });

            ws.on('close', () => {
                clients.delete(userId);
            });
        }
    });
};

module.exports = {
    sendNotification,
    broadcastToRole,
    setupWebSocket,
    notificationTypes
};
