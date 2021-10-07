const express = require('express')
//Mini applicacion de express
const router = express.Router()
const vjController = require('../controllers/consolas')

//Servicio para procesar los datos del formulario CREATE
router.post("/agregarConsola",vjController.postAgregarConsola)
//Consulta de Videojuegos READ
router.get('/obtenerConsolas', vjController.getObtenerConsolas)
//Eliminar Videojuego DELETE
router.post('/borrarConsola',vjController.postBorrarConsola)
//Actualizar Videojuego UPDATE
router.post('/actualizarConsola',vjController.postActualizarConsola)


module.exports = router