'use strict';
const orderAttributes = {
    customer_id: 1,
    product_name: "laptop",
    price: 2300,
    description: "wow"
}
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('orders', [{
            ...orderAttributes,
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('orders');
    }
}
