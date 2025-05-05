const WebSocket = require('ws');
const jwt = require('jsonwebtoken');

const wsServer = new WebSocket.Server({ noServer: true });

const clients = new Map();

wsServer.on('connection', (ws, userId, role) => {
    clients.set(userId, { ws, role });

    ws.on('close', () => {
        clients.delete(userId);
    });
});

function notifyUsers(notification) {
    clients.forEach((client, userId) => {
        if (shouldNotifyUser(client.role, notification)) {
            client.ws.send(JSON.stringify(notification));
        }
    });
}

module.exports = { wsServer, notifyUsers };
