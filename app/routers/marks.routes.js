const marksControllers = require('../controllers/marks');

function marksroutes(fastify, option, next) {
    fastify.get('/marks', marksControllers.list);
    fastify.post('/marks', marksControllers.create);
    next();
}
module.exports = { marksroutes }