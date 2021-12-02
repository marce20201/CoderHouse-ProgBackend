const {Schema,model} = require('mongoose')

//Creo la estructura de datos que tendran los productos
const productosSchema = new Schema({
    nombre: String,
    descripcion: String,
    codigo: Number,
    precio: Number,
    stock:Number,
    imagen:String,
    categoria: String,
    usuarioId:String,
    vendedor: String,
})

module.exports = model('Productos',productosSchema);