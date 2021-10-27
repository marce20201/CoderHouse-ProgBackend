const productosServices = require('../services/productos')
const prd = new productosServices()

exports.createPrd = async (req,res,next) =>{
    try {
        const result = await prd.createProduct(req.body)
        if(result){
            res.json({res:result,msg:"Producto agregado"})
        }else{
            res.json({res:result,msg:"Ocurrio un error en el servidor"})
        }
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
    
}

exports.getAllPrd = async (req,res,next) =>{
    try {
        const productos = await prd.getAllProduct();
        res.json(productos)
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}

exports.getPrdCod = async (req,res,next) => {
    try {
        const respuesta = await prd.getprdCod(req.params.cod);
        res.json(respuesta)
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.getPrdId = async (req,res,next) => {
    let idProducto = req.params.id
    try {
        const respuesta = await prd.getprdId(idProducto);
        res.json(respuesta)
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}


exports.getPrdName = async (req,res,next)=>{
    try {
        const respuesta = await prd.getprdName(req.params.name)
        res.json(respuesta)
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.getPrdPrice = async (req,res,next)=>{
    let desdePrecio = req.params.desde
    let hastaPrecio = req.params.hasta 
   try {
        const respuesta = await prd.getprdPrice(desdePrecio,hastaPrecio) 
        res.json(respuesta)
   } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
   }
}

exports.getPrdStock = async (req,res,next)=>{
    let desdeStock = req.params.desde
    let hastaStock = req.params.hasta
    try {
        const respuesta = await prd.getprdStock(desdeStock,hastaStock) 
        res.json(respuesta)
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.dltPrd = async(req,res,next)=>{
    let cod = req.params.id
    try {
        await prd.dltPrd(cod)
        res.send({
            msg:'Producto eliminado'
        })
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.updPrd = async (req,res,next)=>{
   /*  console.log(req.body.prd) */
    try {
        await prd.updatePrd(req.body.prd)
        res.send({
            msg: 'producto actualizado'
        })
    } catch (error) {
        res.status(500).send('Ocurrio un error en el servidor')
    }
}

exports.filtraCategoria = async (req,res)=>{
    /* console.log(req.params) */
    let {cat,prdId} = req.params
    /* console.log(cat)
    console.log(prdId) */
    try {
        const data = await prd.buscaporCategoria(cat,prdId)
        if(data)
            res.json(data)
        else
            res.send('No hay otros productos de la misma categoria')
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')   
    }
}