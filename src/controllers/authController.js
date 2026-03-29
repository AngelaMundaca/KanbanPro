const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../../models');

const register = async (req, res) => {
    try {
        const { nombre, email, contrasena } = req.body;

        const hash = await bcrypt.hash(contrasena, 10);

        const usuario = await Usuario.create({
            nombre,
            email,
            contrasena: hash
        });

        res.json({ mensaje: 'Usuario creado', usuario });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error en registro' });
    }
};

const login = async (req, res) => {
    try {
        const { email, contrasena } = req.body;

        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no existe' });
        }

        const valido = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!valido) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
            { id: usuario.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error en login' });
    }
};

module.exports = {
    register,
    login
};