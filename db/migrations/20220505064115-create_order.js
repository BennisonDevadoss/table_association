'use strict';
module.exports = {
  async up(QueryInterface, Sequelize) {
    await QueryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'customers',
          key: 'id',
          as: 'customer_id'
        }
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      }
    })
  },
  async down(QueryInterface, Sequelize) {
    await QueryInterface.dropTable('orders');
  }
};
