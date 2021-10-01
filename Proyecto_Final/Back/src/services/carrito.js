const carritoModel = require('../dao/models/carrito')

//Metodos
module.exports = class {

    async addPrdCart(prd){
        await carritoModel.create(prd)
    }


    async getAllPrdCart(){
        return carritoModel.find()
    }

    async dltPrdCart(prdId){
        await carritoModel.deleteOne({prdId})
    }

}