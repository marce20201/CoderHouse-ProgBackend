const categoriasModel = require('../dao/models/categorias')

module.exports = class {

    async agregarCategoria(cat){
        await categoriasModel.create(cat)
    }

}