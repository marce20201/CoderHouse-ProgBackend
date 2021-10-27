const {Schema,model} = require('mongoose')

const carritoSchema = new Schema({
    usuarioId:String,
    nombreusr: String,
    email:String,
    items:[
        {
            nombre: String,
            descripcion: String,
            codigo: Number,
            precio: Number,
            stock:Number,
            imagen:String,
            categoria: String,
            cantidad: Number,
        }
    ],
    total: Number
})

module.exports = model('Carrito',carritoSchema);