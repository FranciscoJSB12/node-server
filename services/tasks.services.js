const { models} = require("../libs/sequelize");

class TasksService {
    async getAllTasks () {
        const tasks = await models.Task.findAll({
            order: [["id", "ASC"]],
        });
        return tasks;
    }

    async getOneTask (id) {
      const parsedId = Number(id);
      const task = await models.Task.findByPk(parsedId);
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    }

    async saveTask (task) {
        const newTask = await models.Task.create(task);
        return newTask;
    }

    async deleteTask (id) {
        const task = await models.Task.findByPk(id);
        await task.destroy();
    }

    async changeTask({ id, text, done }) {
        const task = await models.Task.findByPk(id);
        await task.update({ text, done });
    }
}

module.exports = TasksService;
