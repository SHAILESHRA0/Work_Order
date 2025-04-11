const express = require("express");
const Workorder = require("../models/Workorder");
const router = express.Router();

router.get("/", async (req, res) => {
    const workorders = await Workorder.find();
    res.json(workorders);
});

router.post("/create", async (req, res) => {
    const workorder = new Workorder(req.body);
    await workorder.save();
    res.json({ message: "Workorder created successfully" });
});

router.put("/update/:id", async (req, res) => {
    await Workorder.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Workorder updated successfully" });
});

module.exports = router;