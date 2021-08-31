const {Schema,model} = require('mongoose')

//Creo la estructura de datos que tendran los productos
const productosSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    foto: String
})

module.exports = model('Productos',productosSchema);