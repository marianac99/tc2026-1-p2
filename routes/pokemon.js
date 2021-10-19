const router = require("express").Router();
const pokemonController = require("../controllers/pokemon")

router.post('/agregarPokemon',pokemonController.postAgregarPokemon)

module.exports = router