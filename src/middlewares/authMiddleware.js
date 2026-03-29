const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        // No hay token
        if (!token) {
            // Si es navegador → redirige
            if ((req.headers.accept || '').includes('text/html')) {
                return res.redirect('/login');
            }

            return res.status(401).json({ mensaje: 'Token no enviado' });
        }

        // Verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = decoded;

        next();

    } catch (error) {

        // Token inválido
        if ((req.headers.accept || '').includes('text/html')) {
            return res.redirect('/login');
        }

        return res.status(403).json({ mensaje: 'Token inválido' });
    }
};

module.exports = authMiddleware;