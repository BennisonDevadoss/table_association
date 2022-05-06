const fastify = require('fastify');
const { customerRoutes } = require('./customer.routes');
const { studentRoute } = require('./student.routes');
const { marksroutes } = require('./marks.routes')

function privateRoutes(fastify, option, next) {
    fastify.register(studentRoute);
    fastify.register(customerRoutes);
    fastify.register(marksroutes)
    next();
}
module.exports = { privateRoutes }
