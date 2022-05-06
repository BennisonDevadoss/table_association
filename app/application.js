const { fastify } = require('fastify');
const { privateRoutes } = require('./routers/privateRoute')
// const privateRoutes = require()
const server =
    fastify({
        logger: true,
    });

function build() {
    server.register(privateRoutes);
    // server.register(publicRoutes);
    return server;
}
module.exports = build; 