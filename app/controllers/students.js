const studentService = require('../services/students')
function list(req, reply) {
    return studentService.list(/* attributes */)
        .then((students) => {
            reply.code(200).send(students)
        }).catch((error) => {
            reply.code(404).send(error)
        })
}

function create(req, reply) {
    const { body } = req;
    const studentAttributes = body.students;
    return studentService.create(studentAttributes)
        .then((students) => {
            reply.code(200).send(students);
        })
        .catch((error) => {
            reply.code(200).send(error)
        })
}
module.exports = {
    list, create
}
