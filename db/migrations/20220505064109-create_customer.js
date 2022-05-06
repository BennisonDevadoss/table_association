'use strict';

module.exports = {
  async up(QueryInterface, Sequelize) {
    await QueryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.Sequelize.STRING,
      },
    })
  },
  async down(QueryInterface, Sequelize) {
    await QueryInterface.dropTable('customers');
  }
};
