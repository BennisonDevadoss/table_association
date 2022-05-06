"use strict"
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            unique: true,
            allowNull: true,
            type: DataTypes.STRING,
        },
        phone: {
            unique: true,
            allowNull: true,
            type: DataTypes.STRING,
        },
        location: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        tableName: 'customers',
        timestamps: false,
    });
    Customer.associate = (models) => {
        Customer.hasMany(models.Order, {
            foreignKey: 'customer_id',
            as: 'orders',
        })
    }
    return Customer;
}
