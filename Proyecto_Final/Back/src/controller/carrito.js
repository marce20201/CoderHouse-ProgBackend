const carritoServices = require('../services/carrito')
const cart = new carritoServices()

exports.addPrdCart = async (req,res,next) =>{
    try {
        await cart.addPrdCart(req.body.prd)
        res.send({
            msg: 'Producto agregado al carrito'
        })
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}

exports.getAllPrdCart = async (req,res,next) =>{
    try {
        const productos = await cart.getAllPrdCart()
        res.json(productos)
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
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