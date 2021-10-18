const {Schema,model} = require('mongoose')

const categoriaSchema = new Schema({
    descripcion: String
})

module.exports = model('categorias',categoriaSchema);