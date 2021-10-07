const express = require('express')
//Mini applicacion de express
const router = express.Router()
const vjController = require('../controllers/consolaVideojuegos')

//Servicio para procesar los datos del formulario CREATE
router.post("/agregarConsolaV",vjController.postAgregarConsolaV)
//Consulta de Videojuegos READ
router.get('/obtenerConsolasV', vjController.getObtenerConsolasV)
//Eliminar Videojuego DELETE
router.post('/borrarConsolaV',vjController.postBorrarConsolaV)
//Actualizar Videojuego UPDATE
router.post('/actualizarConsolaV',vjController.postActualizarConsolaV)


module.exports = router