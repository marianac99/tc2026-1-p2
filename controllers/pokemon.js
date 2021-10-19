const Pokemon = require("../models/pokemon")

exports.postAgregarPokemon = async (req,res)=>{
    const pokemon = new Pokemon(req.body);
    try{
        await pokemon.save()
        console.log(pokemon)
        console.log("Elemento registrado exitosamente")

    }catch(err){
        console.log(err)
    }
}