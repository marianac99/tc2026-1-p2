const express = require ("express")
const app = express()

app.get("/prueba", (req, res) =>{
    req.send ("Prueba del servidor funcianando")

})

app.listen(8084,()=>{
    console.log("Servidor en linea puerto 8084")
})