const mongoose = require("mongoose")


//Definir Esquema -> estructura del socumento de entrada en la coleccion
const PokemonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required:true
    },
    numero:{
        type:Number
    },
    tipo:[String],
    descripcion:{
        type:String,
        required:false
    }
},{collection:'pokemon'})

//Crear el modelo a partir del esquema definido
module.exports = mongoose.model('pokemon', PokemonSchema)