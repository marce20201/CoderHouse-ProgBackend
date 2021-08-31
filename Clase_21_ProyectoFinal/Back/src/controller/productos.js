const productosServices = require('../services/productos')
const prd = new productosServices()

exports.createPrd = async (req,res,next) =>{
    await prd.createProduct(req.body)
    res.send('ok')
}

exports.getAllPrd = async (req,res,next) =>{
    const productos = await prd.getAllProduct();
    res.json(productos)
}