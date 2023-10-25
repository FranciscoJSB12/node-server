const { Sequelize } = require('sequelize');
const setupModels = require('../models/index');

const sequelize = new Sequelize('my_tasks', 'fran', 'admin123', {
    host: 'localhost',
    dialect: 'postgres'
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;