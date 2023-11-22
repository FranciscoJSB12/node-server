const { Model, DataTypes, Sequelize } = require("sequelize");

const TASK_TABLE = "tasks";

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    text: {
        allowNull: false,
        type: DataTypes.STRING
    },
    done: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    frecuent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Task extends Model {
    static associate () {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}

module.exports = {
    TASK_TABLE,
    TaskSchema,
    Task
}
