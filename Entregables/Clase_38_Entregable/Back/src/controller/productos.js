

exports.PrdGet = (req,res,next) =>{
    res.send('ok')
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