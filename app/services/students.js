const db = require('../models');
const marks = require('../models/marks');

const { Student, Mark } = db;

function list(/* attributes */) {
    return Student.findAll({
        include: {
            model: Mark,
            as: 'marks'
        }
    })
}

function create(studentAttributes) {
    return Student.create(studentAttributes)
}
module.exports = {
    list, create
}
