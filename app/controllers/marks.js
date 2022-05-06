const markService = require('../services/marks')
function list(req, reply) {
    markService.list(/* Attributes */)
        .then(marks => {
            reply.code(200).send(marks);
        })
        .catch(error => {
            reply.code(404).send(error);
        })
}

function create(req, reply) {
    const { body } = req;
    markAttributes = body.marks;
    markService.create(markAttributes)
        .then((marks) => {
            reply.code(201).send(marks);
        })
        .catch((error) => {
            reply.code(422).send(error)
        })

}
module.exports = { list, create }