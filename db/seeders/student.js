'use strict';
const userAttributes = {
    first_name: 'bennison',
    last_name: '',
    mail: 'bennisondevadoss@gmail.com',
    department: 'B.Sc Computer Science',
    address: 'tirunelveli'
}
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('students', [{
            ...userAttributes,
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('students');
    }
}
