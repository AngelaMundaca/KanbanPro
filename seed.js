const { sequelize, Usuario, Tablero, Lista, Tarjeta } = require('./models');

const poblarBaseDeDatos = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('✅ Tablas creadas correctamente');

        const usuarios = await Usuario.bulkCreate([
            { nombre: 'David Torres', email: 'david@kanbanpro.com' },
            { nombre: 'Dev Team', email: 'dev@kanbanpro.com' }
        ], { returning: true });

        const [usuario1, usuario2] = usuarios;

        const tableros = await Tablero.bulkCreate([
            { titulo: 'Desarrollo KanbanPro', usuarioId: usuario1.id },
            { titulo: 'Campaña de Lanzamiento', usuarioId: usuario1.id },
            { titulo: 'Marketing Q2', usuarioId: usuario2.id }
        ], { returning: true });

        const tablero1 = tableros[0];
        const tablero2 = tableros[1];
        const tablero3 = tableros[2];

        const listas = await Lista.bulkCreate([
            { titulo: 'Backlog', tableroId: tablero1.id },
            { titulo: 'En Progreso', tableroId: tablero1.id },
            { titulo: 'Terminado', tableroId: tablero1.id },
            { titulo: 'Ideas', tableroId: tablero2.id },
            { titulo: 'Pendientes', tableroId: tablero3.id }
        ], { returning: true });

        const backlog = listas[0];
        const enProgreso = listas[1];
        const terminado = listas[2];
        const ideas = listas[3];
        const pendientes = listas[4];

        await Tarjeta.bulkCreate([
            {
                titulo: 'Implementar Auth JWT',
                descripcion: 'Agregar autenticación segura al sistema',
                estado: 'pendiente',
                listaId: backlog.id
            },
            {
                titulo: 'Diseñar dashboard',
                descripcion: 'Maquetar vista principal del tablero',
                estado: 'en progreso',
                listaId: enProgreso.id
            },
            {
                titulo: 'Configurar proyecto',
                descripcion: 'Preparar estructura inicial del proyecto',
                estado: 'terminado',
                listaId: terminado.id
            },
            {
                titulo: 'Ideas para redes',
                descripcion: 'Definir copies y conceptos visuales',
                estado: 'pendiente',
                listaId: ideas.id
            },
            {
                titulo: 'Revisar métricas',
                descripcion: 'Analizar rendimiento de campaña',
                estado: 'pendiente',
                listaId: pendientes.id
            }
        ]);

        console.log('✅ Base de datos poblada con datos de prueba');
        process.exit();
    } catch (error) {
        console.error('❌ Error en seed:', error.message);
        process.exit(1);
    }
};

poblarBaseDeDatos();