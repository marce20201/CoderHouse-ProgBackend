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

exports.getAllPrdCart = async (req,res,next) =>{
    try {
        /* 615f6308b4e9ad2dcef734dc */
        let {id} = req.params
        /*  console.log(id); */
        const data = await cart.getAllPrdCart(id)
        if(data){
            res.json({res:true,data})
        }else{
            res.json({res: false,msg:"No existen productos en tu carrito"})
        }
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

exports.updPrdCant = async (req,res,next) =>{
    await cart.updCart(req.body)
    res.send('ok')
}