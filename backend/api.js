const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { assignWorkOrderToTechnician } = require('./database');

app.use(bodyParser.json());

app.post('/api/assignWorkOrder', (req, res) => {
    const { workOrderId, technicianId } = req.body;

    if (!workOrderId || !technicianId) {
        return res.status(400).json({ success: false, message: "Invalid input" });
    }

    assignWorkOrderToTechnician(workOrderId, technicianId)
        .then(() => res.json({ success: true }))
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Internal server error" });
        });
});

app.listen(3000, () => console.log('API running on port 3000'));
