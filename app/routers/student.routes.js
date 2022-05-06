const studentcontroller = require('../controllers/students')
function studentRoute(fastify, option, next) {
    fastify.get('/students', studentcontroller.list);
    fastify.post('/students', studentcontroller.create);
    next();
}
module.exports = { studentRoute }; 