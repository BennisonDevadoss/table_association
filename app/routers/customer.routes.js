const customerController = require('../controllers/customers');

function customerRoutes(fastify, option, next) {
    fastify.get('/customers', customerController.list);
    next();
}
module.exports = { customerRoutes }