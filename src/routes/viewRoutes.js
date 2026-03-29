const express = require('express');
const router = express.Router();

const vistasController = require('../controllers/vistasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register')); // ← CORREGIDO

// PROTEGIDO
router.get('/dashboard', authMiddleware, vistasController.dashboard);

module.exports = router;