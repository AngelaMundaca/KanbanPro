const { Tarjeta } = require('../../models');

const crearTarjeta = async (req, res) => {
    try {
        const tarjeta = await Tarjeta.create({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
            listaId: req.params.listaId
        });
        res.json(tarjeta);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear tarjeta' });
    }
};

const actualizarTarjeta = async (req, res) => {
    try {
        await Tarjeta.update(
            req.body,
            { where: { id: req.params.tarjetaId } }
        );
        res.json({ mensaje: 'Actualizada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar tarjeta' });
    }
};

const eliminarTarjeta = async (req, res) => {
    try {
        await Tarjeta.destroy({
            where: { id: req.params.tarjetaId }
        });
        res.json({ mensaje: 'Eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar tarjeta' });
    }
};

module.exports = {
    crearTarjeta,
    actualizarTarjeta,
    eliminarTarjeta
};