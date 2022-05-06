const customerService = require('../services/customers')
function list(req, reply) {
    customerService.list()
        .then(customers => {
            reply.code(200).send(customers)
        })
        .catch(error => {
            reply.code(404).send(error);
        })
}

module.exports = { list }