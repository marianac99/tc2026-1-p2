const path = require('path')
const Videojuego = require('../utils/database').models.videojuego


exports.postAgregarConsola = (req, res)=>{
    console.log(req.body)

    Consola.create(req.body)
    .then(result=>{
        console.log("Consola creado exitosamente")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
    
}


exports.getObtenerConsola = (req, res)=>{
    Consola.findAll()
    .then(consola =>{
        console.log(consola)
        res.json(consola)
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
}

exports.postBorrarConsola = (req, res)=>{
    console.log(req.body)
    Conosla.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Registro eliminado")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
}

exports.postActualizarConsola = (req, res)=>{
    console.log(req.body)

    Consola.update({
        nombre: req.body.nombre,

    },{
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Registro actualizado")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
}