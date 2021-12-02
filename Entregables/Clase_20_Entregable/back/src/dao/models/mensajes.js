const {Schema,model} = require('mongoose')

//Creo la estructura que tendra la estrucutra de mensajes
const mensajeSchema = new Schema({
    email:String,
    texto: String,
})

//Creo el modelo que dara acceso a los metodos CRUD
module.exports = model('Mensajes',mensajeSchema);