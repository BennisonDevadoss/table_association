const db = require('../models');
const { Mark } = db;

function list(/* Attributes */) {
    return Mark.findAll();
}

async function create(markAttributes) {
    console.log('markAttributes', markAttributes)
    return await Mark.create(markAttributes)
}
module.exports = { list, create }