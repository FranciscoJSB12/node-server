const { models} = require("../libs/sequelize");

class TasksService {
    async find () {
        const tasks = await models.Task.findAll({
            order: [["id", "ASC"]],
        });
        if (!task) {
            throw new Error("No tasks have been found");
        }
        return tasks;
    }

    async findOne (id) {
      const parsedId = Number(id);
      const task = await models.Task.findByPk(parsedId);
      if (!task) {
        throw new Error("Task not found");
      }
      return task;
    }

    async create (task) {
        const newTask = await models.Task.create(task);
        return newTask;
    }

    async update ({ id, text, done }) {
        const task = await models.Task.findByPk(id);
        if (!task) {
            throw new Error("Task not found");
        }
        await task.update({ text, done });
    }

    async delete (id) {
        const task = await models.Task.findByPk(id);
        if (!task) {
            throw new Error("Task not found");
        }
        await task.destroy();
    }
}

module.exports = TasksService;
