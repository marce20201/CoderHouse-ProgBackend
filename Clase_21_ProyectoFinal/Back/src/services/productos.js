const productosModel = require('../dao/models/productos')

//Metodos de productos
module.exports = class {

    async createProduct(prd){
        await productosModel.create(prd)
    }

    async getAllProduct(){
        return productosModel.find()
    }

}