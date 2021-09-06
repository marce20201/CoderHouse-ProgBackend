const productosServices = require('../services/productos')
const prd = new productosServices()

exports.createPrd = async (req,res,next) =>{
    /* console.log(req.body.prd); */
    await prd.createProduct(req.body.prd) 
    res.send({
        msg: 'Producto agregado!'
    })
}

exports.getAllPrd = async (req,res,next) =>{
    const productos = await prd.getAllProduct();
    res.json(productos)
}