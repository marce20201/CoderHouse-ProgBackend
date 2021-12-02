//Requerimos el modulo mongoose
const mongoose = require('mongoose')
const {MONGO_URI} = require('../../config/globals')

//Exportamos la coneccion asincrona a la BD y realizo configuraciones
exports.getConnection = async () =>{
   try{
    await mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    return "Conectado a la BD"
   }catch(err){
    return "Error en la conexion a la BD"
   }
}