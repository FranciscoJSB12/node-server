const express = require("express");

const router = express.Router();

const TasksService = require("../services/tasks.services");

const service = new TasksService();

router.get("/", async (req, res) => {
    try {
      const data = await service.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(404).json({
        message: err.message
      });
    }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await service.findOne(id);
    res.status(200).json({
      message: "Task found",
      task: data,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }
});

router.post("/", async (req, res) => {
    const task = req.body;
    const data = await service.create(task);
    res.status(201).json(data);
});

router.patch("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const task = req.body;
      const data = await service.update({id, ...task});
      res.status(200).json(data);
    } catch (err) {
      res.status(404).json({
        message: err.message
      });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await service.delete(id);
      res.status(200).json(data);
    } catch (err) {
      res.status(404).json({
        message: err.message
      });
    }
});

module.exports = router;