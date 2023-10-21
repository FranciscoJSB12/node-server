const express = require("express");
const cors = require("cors");
const TasksService = require("./services/tasks.services");

const app = express();
const port = 3001;

const service = new TasksService();

app.use(cors());

app.use(express.json());

app.get("/api/tasks", async (req, res) => {
});

app.post("/api/tasks", async (req, res) => {
});

app.listen(port, () => console.log("Server running on port " + port));

