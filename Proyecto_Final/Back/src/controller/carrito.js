const carritoServices = require('../services/carrito')
const cart = new carritoServices()

exports.addPrdCart = async (req,res,next) =>{
   /*  console.log(req.body) */
    try {
        const resultado = await cart.addPrdCart(req.body)
        if(resultado){
            res.send({
                res: resultado,
                msg: 'Producto agregado al carrito'
            })
        }else{
            res.send({
                res: resultado,
                msg: 'Ocurrio un error en el servidor'
            })
        }
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}

exports.getAllPrdCart = /* async */ (req,res,next) =>{
    /* try {
        const productos = await cart.getAllPrdCart()
        res.json(productos)
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    } */
}

exports.dltPrdCart = async(req,res,next)=>{
    try {
        let codigo = req.params.id
        await cart.dltPrdCart(codigo)
        res.send('Producto eliminado')
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}