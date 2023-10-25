const { models} = require("../libs/sequelize");

class TasksService {
    async getAllTasks () {
        const data = await models.Task.findAll({
            order: [["id", "ASC"]],
        });
        return data;
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