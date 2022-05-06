'use strict';
const customerAttributes = {
    name: 'Bennison Devadoss',
    email: 'bennisondevadoss@gmail.com',
    phone: '6379705181',
    location: 'Tirunelveli'
}
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('customers', [{
            ...customerAttributes,
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('customers');
    }
}
