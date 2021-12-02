const carritoModel = require('../dao/models/carrito')
const userModel = require('../dao/models/usuarios')


//Metodos
module.exports = class {

    async addPrdCart(prd){
      try {
        const data = await carritoModel.find({'usuarioId':prd.usuarioId})
        if(data.length == 0){
            const user = await userModel.findOne({'_id':prd.usuarioId})
            let precioXcantidad = prd.items.precio * prd.items.cantidad
           /*  console.log(`Precio ${prd.items.precio} y cantidad ${prd.items.cantidad}`); */
             let objNuevo = {
                usuarioId: prd.usuarioId,
                nombreusr: user.nombre,
                email: user.email,
                items:prd.items,
                total:precioXcantidad
            }
            await carritoModel.create(objNuevo)
            return true 
        }else{
            let prdNew = prd.items
            const prdcart = await carritoModel.findOne({'items.codigo': prdNew.codigo})
            if(!prdcart){
               await carritoModel.updateOne({'nombreusr':prd.nombreusr},{$push: {'items':prdNew}})
               /* await carritoModel.updateOne({'nombreusr':prd.nombreusr},{'total': s}) */
               return true
            }
            else {
                let nuevaCantidad = prdcart.items[0].cantidad + prd.items.cantidad
                let precioXcantidad = prd.items.precio * prd.items.cantidad
                let nuevoTotal = prdcart.total + precioXcantidad
                /* console.log(`nueva cantidad: ${nuevaCantidad}`)
                console.log(`nueva precio: ${precioXcantidad}`);
                console.log(`nueva total: ${nuevoTotal}`); */
                await carritoModel.updateMany({'usuarioId':prd.usuarioId,'items.codigo':prd.items.codigo},{$set:{'total':nuevoTotal, 'items.cantidad':nuevaCantidad }})
                /* await carritoModel.findOneAndUpdate({'usuarioId':prd.usuarioId},{'items.cantidad':nuevaCantidad}) */
                return true
            } 
        }
      } catch (error) {
          return false
      }
     
    }


    async getAllPrdCart(userId){
        try {
            return carritoModel.findOne({'usuarioId': userId})
        } catch (error) {
            return error
        }
    }

    async dltPrdCart(usrid,prdid){
       try {
            const data = await carritoModel.findOne({'usuarioId': usrid})
            if(data){
                await carritoModel.updateOne({'usuarioId':usrid},{$pull:{'items':{'codigo':prdid}}})
                return true
            }else{
                return false
            }  
       } catch (error) {
           return error
       }
    }

    async updCart(data){
        
    }
}