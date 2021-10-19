const express = require("express")
const mongoose = require("mongoose")
const pokemonRoutes = require("./routes/pokemon")


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/pkemon", pokemonRoutes)

//URI=> usuario:password@direccionIP:puerto/bd_nombre?authSource=db_usuarios(admin)
mongoose.connect('mongodb://user2:root@54.234.54.143:27017/base2?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor en linea"))
    })
    .catch(err=>console.log(err))