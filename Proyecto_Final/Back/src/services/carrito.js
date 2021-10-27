const carritoModel = require('../dao/models/carrito')
const userModel = require('../dao/models/usuarios')


//Metodos
module.exports = class {

    async addPrdCart(prd){
      try {
        const data = await carritoModel.find({'usuarioId':prd.usuarioId})
        if(data.length == 0){
            const user = await userModel.findOne({'_id':prd.usuarioId})
             let objNuevo = {
                usuarioId: prd.usuarioId,
                nombreusr: user.nombre,
                email: user.email,
                items:prd.items,
                total:prd.items.precio
            }
            await carritoModel.create(objNuevo)
            return true 
        }else{
            let prdNew = prd.items
            const prdcart = await carritoModel.findOne({'items.codigo': prdNew.codigo})
            if(!prdcart){
               await carritoModel.updateOne({'nombreusr':prd.nombreusr},{$push: {'items':prdNew}})
               return true
            }
            else {
                let nuevoTotal = prdcart.total + prd.items.precio
                await carritoModel.findOneAndUpdate({'nombreusr':prd.nombreusr},{'total':nuevoTotal})
                return true
            } 
        }
      } catch (error) {
          return false
      }
     
    }


    async getAllPrdCart(){
        return carritoModel.find()
    }

    async dltPrdCart(prdId){
        await carritoModel.deleteOne({prdId})
    }

}