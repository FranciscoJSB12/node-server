'use strict';

const {  TASK_TABLE, TaskSchema } = require('../../models/task.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TASK_TABLE, TaskSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TASK_TABLE);
  }
};
