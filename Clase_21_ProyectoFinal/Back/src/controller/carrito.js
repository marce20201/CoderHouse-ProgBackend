const carritoServices = require('../services/carrito')
const cart = new carritoServices()

exports.addPrdCart = async (req,res,next) =>{
    await cart.addPrdCart(req.body)
    res.send({
        msg: 'Producto agregado al carrito'
    })
}

exports.getAllPrdCart = async (req,res,next) =>{
    const productos = await cart.getAllPrdCart()
    res.json(productos)
}