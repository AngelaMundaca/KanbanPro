const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Tablero = sequelize.define('Tablero', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Tablero;
};