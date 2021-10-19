const mongoose = require ("mongoose")

//URI=> usuario:password@direccionIP:puerto/bd_nombre?authSource=db_usuarios(admin)
mongoose.connect('mongodb://user2:root@54.234.54.143:27017/base2?authSource=admin')
    .then(()=>console.log("Conexion exitosa"))
    .catch(err=>console.log(err))

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
const Pokemon = mongoose.model('pokemon', PokemonSchema)


//Agregar un documento
const pokemon1 = new Pokemon({
    nombre:"Squirte",
    descripcion:"Tortuga",
    numero:7,
    tipo:["agua"],
    _id: new mongoose.Types.ObjectId()
})

//CREATE
/*pokemon1.save()
    .then(()=>{
        console.log(pokemon1)
        console.log("Pokemon Creado")
    })
    .catch(err=>console.log(err))
*/

//Read
Pokemon.find()
    .then(resultado=>{
        console.log(resultado[0].tipo)
    })
    .catch(err=>console.log(err))


Pokemon.findOne()
    .then(resultado=>{
        console.log(resultado)
        /*const p = new Pokemon(resultado)
        p.save()
            .then()
            .catch()
        */
    })
    .catch(err=>console.log(err))
    

//Update
async function actualizar(){
    try{
        //Condicion,cambio
        await Pokemon.findOneAndUpdate({nombre:"Squirte"},{descripcion:"Tortuga Bebé"})
        let pok = await Pokemon.findOne({nombre:"Squirte"})
        console.log(pok)
    }catch(err){
        console.log(err)
    }
}
//actualizar()

//DELETE
const eliminar = async ()=>{
    await Pokemon.findByIdAndRemove("61678d3af0d9d56958a55125")
    console.log("Pokemon Eliminado")
    let pok = await Pokemon.find()
    console.log(pok)
}

eliminar()