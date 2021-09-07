const productosModel = require('../dao/models/productos')

//Metodos de productos
module.exports = class {

    async createProduct(prd){
        await productosModel.create(prd)
    }

    async getAllProduct(){
        return productosModel.find()
    }

    async getprdCod(prdCod){
        return productosModel.findOne({'codigo': prdCod})
    }

    async getprdName(prdName){
        return productosModel.findOne({'nombre':prdName})
    }

    async getprdPrice(prcdesde,prchasta){
        return productosModel.find({
            $and:[
                {'precio':{$gte:prcdesde}},
                {'precio':{$lte:prchasta}}
            ]
        })
    }

    async getprdStock(stockdesde,stockhasta){
        return productosModel.find({
            $and:[
                {'stock':{$gte:stockdesde}},
                {'stock':{$lte:stockhasta}}
            ]
        })
    }

    async dltPrd(prdid){
        await productosModel.findOneAndDelete({'codigo':prdid})
    }

    async updatePrd(prd){
        await productosModel.findOneAndUpdate(
            {'codigo':prd.codigo},
            {
                'nombre':prd.nombre,
                'descripcion':prd.descripcion,
                'precio':prd.precio,
                'stock':prd.stock
            })
    }
}