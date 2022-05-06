module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'orders',
        timestamps: false,
    })
    return Order;
}
