const { Lista } = require('../../models');

const crearLista = async (req, res) => {
    try {
        const lista = await Lista.create({
            titulo: req.body.titulo,
            tableroId: req.params.tableroId
        });
        res.json(lista);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear lista' });
    }
};

const actualizarLista = async (req, res) => {
    try {
        await Lista.update(
            { titulo: req.body.titulo },
            { where: { id: req.params.listaId } }
        );
        res.json({ mensaje: 'Actualizada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar lista' });
    }
};

const eliminarLista = async (req, res) => {
    try {
        await Lista.destroy({
            where: { id: req.params.listaId }
        });
        res.json({ mensaje: 'Eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar lista' });
    }
};

module.exports = {
    crearLista,
    actualizarLista,
    eliminarLista
};