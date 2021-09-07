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

exports.getPrdCod = async (req,res,next) => {
    /* console.log(req.params.cod) */
    const respuesta = await prd.getprdCod(req.params.cod);
    /* console.log(respuesta) */
    res.json(respuesta)
}

exports.getPrdName = async (req,res,next)=>{
    const respuesta = await prd.getprdName(req.params.name)
 /*    console.log(respuesta) */
    res.json(respuesta)
}

exports.getPrdPrice = async (req,res,next)=>{
    let desdePrecio = req.params.desde
    let hastaPrecio = req.params.hasta 
    const respuesta = await prd.getprdPrice(desdePrecio,hastaPrecio) 
/*     console.log(respuesta) */
    res.json(respuesta)
}

exports.getPrdStock = async (req,res,next)=>{
    let desdeStock = req.params.desde
    let hastaStock = req.params.hasta
    const respuesta = await prd.getprdStock(desdeStock,hastaStock) 
/*     console.log(respuesta) */
    res.json(respuesta)
}

exports.dltPrd = async(req,res,next)=>{
    let cod = req.params.id
    await prd.dltPrd(cod)
    res.send({
        msg:'Producto eliminado'
    })
}

exports.updPrd = async (req,res,next)=>{
   /*  console.log(req.body.prd) */
    await prd.updatePrd(req.body.prd)
    res.send({
        msg: 'producto actualizado'
    })
}