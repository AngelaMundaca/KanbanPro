require('dotenv').config();
const bcrypt = require('bcryptjs');
const { sequelize, Usuario, Tablero, Lista, Tarjeta } = require('./models');

const poblarDB = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Base de datos reiniciada');

        // Hashear contraseñas
        const pass1 = await bcrypt.hash('123456', 10);
        const pass2 = await bcrypt.hash('123456', 10);

        // Usuarios
        const usuarios = await Usuario.bulkCreate([
            { nombre: 'David Torres', email: 'david@kanbanpro.com', contrasena: pass1 },
            { nombre: 'Dev Team', email: 'dev@kanbanpro.com', contrasena: pass2 }
        ], { returning: true });

        // Tableros
        const tableros = await Tablero.bulkCreate([
            { titulo: 'Proyecto KanbanPro', usuarioId: usuarios[0].id },
            { titulo: 'Marketing Q4', usuarioId: usuarios[1].id }
        ], { returning: true });

        // Listas
        const listas = await Lista.bulkCreate([
            { titulo: 'Pendiente', tableroId: tableros[0].id },
            { titulo: 'En Progreso', tableroId: tableros[0].id }
        ], { returning: true });

        // Tarjetas
        await Tarjeta.bulkCreate([
            {
                titulo: 'Crear API',
                descripcion: 'Desarrollar backend',
                estado: 'pendiente',
                listaId: listas[0].id
            }
        ]);

        console.log('Datos insertados correctamente');
        process.exit();
    } catch (error) {
        console.error(error);
    }
};

poblarDB();