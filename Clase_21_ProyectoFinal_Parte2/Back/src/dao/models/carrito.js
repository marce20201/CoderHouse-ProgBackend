const {Schema,model} = require('mongoose')

const carritoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    foto: String
})

module.exports = model('Carrito',carritoSchema);