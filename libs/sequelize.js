const { Sequelize } = require('sequelize');
const setupModels = require('../models/index');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI);

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;