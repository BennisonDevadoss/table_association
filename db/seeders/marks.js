'use strict';
const markAttributes = {
    marks_id: 10,
    javascript: 100,
    python: 100,
    html: 100,
    react: 100,
    total: 400,
    studentId: 1
}
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('marks', [{
            ...markAttributes,
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('marks');
    }
}
