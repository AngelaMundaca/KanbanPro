const express = require('express');
const router = express.Router();

const vistasController = require('../controllers/vistasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register')); // ← CORREGIDO

// PROTEGIDO
router.get('/dashboard', (req, res) => {

    const tareas = [
        { titulo: "Aprender Node.js", estado: "Doing" },
        { titulo: "Crear API", estado: "To Do" },
        { titulo: "Desplegar en Vercel", estado: "Done" }
    ];

    res.render('dashboard', { tareas });
});

module.exports = router;