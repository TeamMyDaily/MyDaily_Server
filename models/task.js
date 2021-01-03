const { TotalKeyword } = require("./index")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Task', {
        TotalKeywordId: {
            type: DataTypes.INTEGER,
            reference: {
                model: TotalKeyword,
                key: 'id',
            }
        },
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        satisfaction: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: true,
            allowNull:false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    })
}