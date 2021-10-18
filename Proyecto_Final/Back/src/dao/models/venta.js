const {Schema,model} = require('mongoose')

const ventaSchema = new Schema({
    usuarioId: String,
    productoId: String,
    nombre: String,
    descripcion: String,
    codigo: Number,
    precio: Number,
    stock:Number,
    imagen:String,
    categoria: String,
    vendedor: String,
})