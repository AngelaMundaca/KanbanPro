console.log("1. Archivo iniciado");

const { sequelize, Tablero, Lista, Tarjeta } = require('./models');
console.log("2. Models importados");

const probarCRUD = async () => {
    try {
        console.log("3. Entró a probarCRUD");

        await sequelize.authenticate();
        console.log("4. Conexión a PostgreSQL exitosa");

        const lista = await Lista.findOne();
        console.log("5. Lista encontrada");

        const nuevaTarjeta = await Tarjeta.create({
            titulo: "Nueva tarjeta de prueba",
            descripcion: "Creada desde test-crud.js",
            estado: "pendiente",
            listaId: lista.id
        });
        console.log("6. CREATE OK:", nuevaTarjeta.titulo);

        const tablero = await Tablero.findOne({
            include: [
                {
                    model: Lista,
                    include: [Tarjeta]
                }
            ]
        });
        console.log("7. READ OK");

        await nuevaTarjeta.update({
            titulo: "Tarjeta actualizada desde CRUD"
        });
        console.log("8. UPDATE OK:", nuevaTarjeta.titulo);

        await nuevaTarjeta.destroy();
        console.log("9. DELETE OK");

        console.log("10. CRUD COMPLETADO");
        process.exit();
    } catch (error) {
        console.error("❌ Error en pruebas CRUD:", error);
        process.exit(1);
    }
};

console.log("11. Antes de llamar probarCRUD");
probarCRUD();