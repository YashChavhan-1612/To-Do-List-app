const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// POST /add
router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({ text: req.body.text });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;