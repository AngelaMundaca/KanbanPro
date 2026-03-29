const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Tarjeta', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pendiente'
        }
    });
};