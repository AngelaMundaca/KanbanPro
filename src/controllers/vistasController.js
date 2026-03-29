const { Tablero, Lista, Tarjeta } = require('../../models');

const dashboard = async (req, res) => {
    try {
        const usuarioId = req.usuario.id;

        const tableros = await Tablero.findAll({
            where: { usuarioId },
            include: {
                model: Lista,
                include: Tarjeta
            }
        });

        res.render('dashboard', { tableros });

    } catch (error) {
        res.status(500).send('Error cargando dashboard');
    }
};

module.exports = { dashboard };