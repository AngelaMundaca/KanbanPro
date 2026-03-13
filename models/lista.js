const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Lista = sequelize.define('Lista', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Lista;
};