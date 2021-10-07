const path = require('path')
const ConsolaV = require('../utils/database').models.consolaVideojuego

exports.postAgregarConsolaV = (req, res)=>{
    console.log(req.body)
    ConsolaV.create(req.body)
    .then(result=>{
        console.log("Consola creada exitosamente")
        res.json({
            estado: "ACEPTADO"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

exports.getObtenerConsolasV= (req, res)=>{
    ConsolaV.findAll()
        .then(consolas=>{
            console.log(consolas)
            res.json(consolas)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"ERROR"})
        })
}

exports.postBorrarConsolaV= (req, res)=>{
    console.log(req.body)
    ConsolaV.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

exports.postActualizarConsolaV = (req, res)=>{
    console.log(req.body.keys)
    
    ConsolaV.update({
        lanzamiento:req.body.lanzamiento
    },{
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Registro actualizado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}