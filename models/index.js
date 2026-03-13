const { sequelize } = require('../src/config/database');

const createUsuario = require('./usuario');
const createTablero = require('./tablero');
const createLista = require('./lista');
const createTarjeta = require('./tarjeta');

const Usuario = createUsuario(sequelize);
const Tablero = createTablero(sequelize);
const Lista = createLista(sequelize);
const Tarjeta = createTarjeta(sequelize);

// Relaciones

Usuario.hasMany(Tablero, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Tablero.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Tablero.hasMany(Lista, { foreignKey: 'tableroId', onDelete: 'CASCADE' });
Lista.belongsTo(Tablero, { foreignKey: 'tableroId' });

Lista.hasMany(Tarjeta, { foreignKey: 'listaId', onDelete: 'CASCADE' });
Tarjeta.belongsTo(Lista, { foreignKey: 'listaId' });

module.exports = {
    sequelize,
    Usuario,
    Tablero,
    Lista,
    Tarjeta
};