const express = require("express");

const router = express.Router();

const TasksService = require("../services/tasks.services");

const service = new TasksService();

router.get("/", async (req, res) => {
    const data = await service.getAllTasks();
    res.json(data);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await service.getOneTask(id);
    res.json({
      message: "Task found",
      task: data,
    });
  } catch (err) {
    res.json({
      message: err.message
    });
  }
});

router.post("/", async (req, res) => {
    const task = req.body;
    const data = await service.saveTask(task);
    res.json(data);
});

router.patch("/", async (req, res) => {
    const task = req.body;
    const data = await service.changeTask(task);
    res.json(data);
});

router.delete("/", async (req, res) => {
    const task = req.body;
    const data = await service.deleteTask(task.id);
    res.json(data);
});

module.exports = router;