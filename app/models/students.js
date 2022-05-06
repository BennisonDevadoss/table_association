const { DataTypes, Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("Student", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'students',
        timestamps: false,
    });
    Student.associate = (models) => {
        Student.hasOne(models.Mark, {
            foreignKey: 'studentId',
            as: 'marks',    // without as it the foreingkey table print with name of model name (Mark) <---- like this 
        });
    };

    return Student;
}
