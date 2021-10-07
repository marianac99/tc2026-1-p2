const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/consola')


//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarConsola',vjController.postAgregarConsola)
//Consulta de videojuegos  READ
router.get('/obtenerConsola',vjController.getObtenerConsola)
//Eliminar videojuego  DELETE
router.post('/borrarConsola',vjController.postBorrarConsola)
//Actualizar videojuego  UPDATE
router.post('/actualizarConsola',vjController.postActualizarConsola)


module.exports = router