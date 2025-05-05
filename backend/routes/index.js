const express = require('express');
const router = express.Router();
const { workOrderRouter } = require('./workOrders');
const { technicianRouter } = require('./technicians');
const { supervisorRouter } = require('./supervisor');
const { managerRouter } = require('./manager');
const { hodRouter } = require('./hod');
const auth = require('../middleware/auth');

router.use('/work-orders', auth, workOrderRouter);
router.use('/technicians', auth, technicianRouter);
router.use('/supervisor', auth, supervisorRouter);
router.use('/manager', auth, managerRouter);
router.use('/hod', auth, hodRouter);

module.exports = router;
