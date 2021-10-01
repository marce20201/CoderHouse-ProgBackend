const {Schema,model} = require('mongoose')

const carritoSchema = new Schema({
    nombre: String,
    descripcion: String,
    codigo: Number,
    precio: Number,
    stock:Number,
    foto: String
})

module.exports = model('Carrito',carritoSchema);