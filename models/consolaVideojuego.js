const Sequelize = require("sequelize")
const ConsolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento:Sequelize.STRING
    })     
}

module.exports = ConsolaVideojuego