const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

// IMPORTS CORRECTOS
const tableroController = require('../controllers/tableroController');
const listaController = require('../controllers/listaController');
const tarjetaController = require('../controllers/tarjetaController');

// PROTEGER TODO
router.use(authMiddleware);

// TABLEROS
router.get('/tableros', tableroController.obtenerTableros);
router.get('/tableros/:tableroId', tableroController.obtenerTablero);
router.post('/tableros', tableroController.crearTablero);
router.put('/tableros/:tableroId', tableroController.actualizarTablero);
router.delete('/tableros/:tableroId', tableroController.eliminarTablero);

// LISTAS
router.post('/tableros/:tableroId/listas', listaController.crearLista);
router.put('/listas/:listaId', listaController.actualizarLista);
router.delete('/listas/:listaId', listaController.eliminarLista);

// TARJETAS
router.post('/listas/:listaId/tarjetas', tarjetaController.crearTarjeta);
router.put('/tarjetas/:tarjetaId', tarjetaController.actualizarTarjeta);
router.delete('/tarjetas/:tarjetaId', tarjetaController.eliminarTarjeta);

module.exports = router;