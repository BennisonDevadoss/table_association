'use strict';
// const { Sequelize, sequelize } = require("../../models");

module.exports = {
  async up(QueryInterface, Sequelize) {
    await QueryInterface.createTable('marks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id',
          as: "studentId",
        }
      },
      marks_id: {
        unique: true,
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      javascript: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      python: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      html: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      react: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

    })
  },
  async down(QueryInterface, Sequelize) {
    await QueryInterface.dropTable('marks');
  }
};
