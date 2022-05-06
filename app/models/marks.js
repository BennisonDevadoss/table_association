module.exports = (sequelize, DataTypes) => {

    const Mark = sequelize.define('Mark', {
        javascript: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        python: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        html: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        react: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'marks',
        timestamps: false
    });

    Mark.associate = (models) => {
        Mark.belongsTo(models.Student, {
            foreignKey: 'studentId',   // id 
        })
    }
    return Mark;
}


/* NOTE: here we don't need define the studentId column */