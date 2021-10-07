const express = require ("express")
const path = require("path")
const vjRoutes = require('./routes/videojuegos')
const sequelize = require('./utils/database')
const app = express()

app.get("/prueba", (req, res) =>{
    res.send("Prueba del servidor funcianando")

})

app.listen(8084,()=>{
    console.log("Servidor en linea puerto 8084")
})


//Middleware
app.use(express.static(path.join(__dirname,'public')))

//Configurar el servidor y que sepa que es un Json
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile)
app.set('view engine' , 'ejs')

app.use( "/videojuegos",vjRoutes);


