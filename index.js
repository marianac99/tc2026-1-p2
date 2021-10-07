const express = require ("express")
const path = require("path")
const vjRoutes = require('./routes/videojuegos')
const conRoutes = require('./routes/consola')
const sequelize = require('./utils/database')
const app = express()


//Configurar el servidor y que sepa que es un Json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use( "/videojuegos",vjRoutes);
//app.use( "/consola",vjRoutes);

app.get("/prueba", (req, res) =>{
    res.send("Prueba del servidor funcianando")

})

/*app.listen(8084,()=>{
    console.log("Servidor en linea puerto 8084")
})*/

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
    })
    })
    .catch(err=>console.log(err))







