const express = require("express");

const router = express.Router();

const TasksService = require("../services/tasks.services");

const service = new TasksService();

router.get("/", async (req, res, next) => {
    try {
      const data = await service.find();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await service.findOne(id);
    res.status(200).json({
      message: "Task found successfully",
      task: data,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
    try {
      const task = req.body;
      await service.create(task);
      res.status(201).json({
        message: "Task created Successfully"
      });
    } catch (err) {
      next(err);
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = req.body;
      await service.update({id, ...task});
      res.status(200).json({
        message: "Task updated successfully"
      });
    } catch (err) {
      next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(200).json({
        message: "Task deleted successfully"
      });
    } catch (err) {
      next(err);
    }
});

module.exports = router;