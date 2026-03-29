const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Lista', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};