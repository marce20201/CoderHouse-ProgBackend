const productosModel = require('../dao/models/productos')
const usrModel = require('../dao/models/usuarios')


//Metodos de productos
module.exports = class {

    async createProduct(prd){
        let nuevoPrd = {}
        try {
            const datos = await productosModel.countDocuments()
            let nuevoCodigo = datos + 1
            const user = await usrModel.findById({'_id':prd.usuarioId})
            if(user){
                nuevoPrd = {
                    nombre: prd.nombre,
                    descripcion:prd.descripcion,
                    codigo:nuevoCodigo,
                    precio:prd.precio,
                    stock:prd.stock,
                    imagen:prd.imagen,
                    categoria:prd.categoria,
                    usuarioId: prd.usuarioId,
                    vendedor:user.nombre
                }
                await productosModel.create(nuevoPrd)
                return true
            }else{
                return false
            }
        } catch (error) {
            return error
        }
    }

    async getAllProduct(){
        return productosModel.find()
    }

    async getprdCod(prdCod){
        return productosModel.findOne({'codigo': prdCod})
    }

    async getprdId(id){
        return productosModel.findById(id)
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

    async buscaporCategoria(cat,prdId){
        productosModel.di
        try {
             return productosModel.find({
                 $and:[
                     {'categoria': cat },
                     {$ne:{'_id':prdId}}
                 ]
             })
        } catch (error) {
            return 'Existio un error al conectarse a la base de datos'
        }
    }
}