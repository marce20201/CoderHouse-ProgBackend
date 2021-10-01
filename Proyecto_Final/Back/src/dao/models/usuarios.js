const {Schema,model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    contraseña: String,
})

module.exports = model('Usuarios',usuarioSchema);