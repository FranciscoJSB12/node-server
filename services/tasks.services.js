const boom = require("@hapi/boom");
const { models} = require("../libs/sequelize");

class TasksService {
    async find () {
        const tasks = await models.Task.findAll({
            order: [["id", "ASC"]],
        });
        if (!tasks) {
            throw boom.notFound("No tasks found");
        }
        return tasks;
    }

    async findOne (id) {
      const parsedId = Number(id);
      const task = await models.Task.findByPk(parsedId);
      if (!task) {
        throw boom.notFound(`Task id: ${id} not found`);
      }
      return task;
    }

    async create (task) {
        const newTask = await models.Task.create(task);
        if (!newTask) {
            throw boom.notImplemented("Unable to create task");
        }
    }

    async update (id, newData) {
        const task = await models.Task.findByPk(id);
        if (!task) {
            throw boom.notFound(`Task id-${id} not found`);
        }
        await task.update(newData);
    }

    async delete (id) {
        const task = await models.Task.findByPk(id);
        if (!task) {
            throw boom.notFound(`Task id: ${id} not found`);
        }
        await task.destroy();
    }
}

module.exports = TasksService;
