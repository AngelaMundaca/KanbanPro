const express = require('express');
const router = express.Router();
const kanbanController = require('../controllers/kanbanController');

router.get('/', (req, res) => res.render('home', { title: 'Inicio' }));
router.get('/login', (req, res) => res.render('login', { title: 'Login' }));
router.get('/register', (req, res) => res.render('register', { title: 'Registro' }));

router.get('/dashboard', kanbanController.renderDashboard);
router.post('/nueva-tarjeta', kanbanController.addTask);

module.exports = router;