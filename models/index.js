const { sequelize } = require('../src/config/database');

const crearUsuario = require('./usuario');
const crearTablero = require('./tablero');
const crearLista = require('./lista');
const crearTarjeta = require('./tarjeta');

const Usuario = crearUsuario(sequelize);
const Tablero = crearTablero(sequelize);
const Lista = crearLista(sequelize);
const Tarjeta = crearTarjeta(sequelize);

Usuario.hasMany(Tablero, {
    foreignKey: 'usuarioId',
    as: 'tableros',
    onDelete: 'CASCADE'
});
Tablero.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    as: 'usuario'
});

Tablero.hasMany(Lista, {
    foreignKey: 'tableroId',
    as: 'listas',
    onDelete: 'CASCADE'
});
Lista.belongsTo(Tablero, {
    foreignKey: 'tableroId',
    as: 'tablero'
});

Lista.hasMany(Tarjeta, {
    foreignKey: 'listaId',
    as: 'tarjetas',
    onDelete: 'CASCADE'
});
Tarjeta.belongsTo(Lista, {
    foreignKey: 'listaId',
    as: 'lista'
});

module.exports = {
    sequelize,
    Usuario,
    Tablero,
    Lista,
    Tarjeta
};