class NotificationService {
    static async notifyTechnician(technicianId, workOrderId, token) {
        try {
            const response = await fetch('/api/notifications/technician', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    technicianId,
                    workOrderId,
                    type: 'WORK_ORDER_ASSIGNED',
                    message: 'You have been assigned a new work order'
                })
            });

            if (!response.ok) throw new Error('Failed to send notification');
            return await response.json();
        } catch (error) {
            console.error('Notification error:', error);
            throw error;
        }
    }
}

export default NotificationService;
