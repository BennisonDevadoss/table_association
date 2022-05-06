const db = require('../models');
const { Customer, Order } = db;
function list(/* attributes */) {
    return Customer.findAll({
        include: {
            model: Order,
            as: 'orders'
        }
    })
}

module.exports = { list }
