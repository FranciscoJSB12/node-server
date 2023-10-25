const express = require("express");
const cors = require("cors");
const TasksService = require("./services/tasks.services");

const app = express();
const port = 3001;

const service = new TasksService();

app.use(cors());

app.use(express.json());

app.get("/api/tasks", async (req, res) => {
    const data = await service.getAllTasks();
    res.json(data);
});

app.post("/api/tasks", async (req, res) => {
    const task = req.body;
    const data = await service.saveTask(task);
    res.json(data);
});

app.patch("/api/tasks", async (req, res) => {
    const task = req.body;
    const data = await service.changeTask(task);
    res.json(data);
});

app.delete("/api/tasks", async (req, res) => {
    const task = req.body;
    const data = await service.deleteTask(task.id);
    res.json(data);
});

app.listen(port, () => console.log("Server running on port " + port));

