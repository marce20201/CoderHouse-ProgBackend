const favModel = require('../dao/models/favoritos')
const prdModel = require('../dao/models/productos')

module.exports = class {

    async agregarFavorito(usuarioId,prdId){
        try {
            let obj = {}
            const prd = await prdModel.findById(prdId)
            if(prd){
                obj = {
                    usuarioId: usuarioId,
                    productoId: prdId,
                    nombre: prd.nombre,
                    descripcion: prd.descripcion,
                    codigo: prd.codigo,
                    precio: prd.precio,
                    stock:prd.stock,
                    imagen:prd.imagen,
                    categoria: prd.categoria,
                    vendedor: prd.vendedor,
                }
                await favModel.create(obj)
            }
            
        } catch (error) {
            return error
        }
        
    }

    async cargarFavoritos(usrid){
        return favModel.find({'usuarioId':usrid})
    }

    async verificaFav(usrid,prdid){
       try {
            const fav = await favModel.findOne({
                $and:[
                    {'usuarioId': usrid},
                    {'productoId':prdid}
                ]
            })
            if(fav){
                return true
            }else
                return false
       } catch (error) {
           return error
       }
    }

    async eliminaFav(usrid,prdid){
        try {
            const data = await favModel.findOneAndDelete({
                $and:[
                    {'usuarioId': usrid},
                    {'productoId':prdid}
                ]
            })
            if(data){
                return true
            }else{
                return false
            }
        } catch (error) {
            return error
        }
        
    }

    async eliminaFavId(id){
        try {
            await favModel.findByIdAndDelete({'_id':id})
            return true
        } catch (error) {
            return error
        }
    }
}