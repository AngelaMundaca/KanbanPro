const { Tablero } = require('../../models');

const obtenerTableros = async (req, res) => {
    try {
        const tableros = await Tablero.findAll({
            where: { usuarioId: req.usuario.id }
        });
        res.json(tableros);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener tableros' });
    }
};

const obtenerTablero = async (req, res) => {
    try {
        const tablero = await Tablero.findByPk(req.params.tableroId);
        res.json(tablero);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener tablero' });
    }
};

const crearTablero = async (req, res) => {
    try {
        const nuevo = await Tablero.create({
            titulo: req.body.titulo,
            usuarioId: req.usuario.id
        });
        res.json(nuevo);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear tablero' });
    }
};

const actualizarTablero = async (req, res) => {
    try {
        await Tablero.update(
            { titulo: req.body.titulo },
            { where: { id: req.params.tableroId } }
        );
        res.json({ mensaje: 'Actualizado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar' });
    }
};

const eliminarTablero = async (req, res) => {
    try {
        await Tablero.destroy({
            where: { id: req.params.tableroId }
        });
        res.json({ mensaje: 'Eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar' });
    }
};

module.exports = {
    obtenerTableros,
    obtenerTablero,
    crearTablero,
    actualizarTablero,
    eliminarTablero
};