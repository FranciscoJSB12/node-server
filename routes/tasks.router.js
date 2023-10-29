const express = require("express");

const router = express.Router();

const TasksService = require("../services/tasks.services");

const validatorHandler = require("../middlewares/validator.handler");

const { checkTaskIdSchema, createTaskSchema, updateTaskSchema } = require("../schemas/task.schema");

const service = new TasksService();

router.get("/", async (req, res, next) => {
    try {
      const data = await service.find();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
});

router.get("/:id", 
  validatorHandler(checkTaskIdSchema, 'params'),
  async (req, res, next) => {
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

router.post("/", 
  validatorHandler(createTaskSchema, 'body'),
  async (req, res, next) => {
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

router.patch("/:id", 
  validatorHandler(checkTaskIdSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = req.body;
      await service.update(id, {...task});
      res.status(200).json({
        message: "Task updated successfully"
      });
    } catch (err) {
      next(err);
    }
});

router.delete("/:id", 
  validatorHandler(checkTaskIdSchema, 'params'),
  async (req, res, next) => {
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