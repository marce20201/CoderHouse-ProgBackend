const prdModel = require('../../dao/models/productos')


module.exports = class {

    async dltPrd(prdid){
        await prdModel.findOneAndDelete({'codigo':prdid})
    }

    async updatePrd(prd){
        await prdModel.findOneAndUpdate(
            {'codigo':prd.codigo},
            {
                'nombre':prd.nombre,
                'descripcion':prd.descripcion,
                'precio':prd.precio,
                'stock':prd.stock
            })
    }
}