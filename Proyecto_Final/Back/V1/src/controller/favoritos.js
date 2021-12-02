const favServices = require('../services/favoritos')
const fav = new favServices()

exports.agregaFavorito =  async (req,res,next) =>{
    let {usuarioId,productoId} = req.body  
    try {
        await fav.agregarFavorito(usuarioId,productoId)
        res.json({res:true,msg:'Agregado a tus favoritos'})
    } catch (error) {
        res.status(500).json({res:false,msg:'Ocurrio un error en la base de Datos'})
    }
}

exports.verificaFavorito = async (req,res,next) =>{
    let {id,prdid} = req.params;
    try {
        const result = await fav.verificaFav(id,prdid)
        if(result)
            res.json({res: result,msg:'Existe'})
        else
            res.json({res: result,msg:'No existe'})
    } catch (error) {
        res.status(500).send('Ocurrio un error en la base de datos')
    }
}

exports.cargaFavoritos = async (req,res,next) =>{
    let usrId = req.params.id;
    try {
        const data = await fav.cargarFavoritos(usrId)
        res.json(data)
    } catch (error) {
        res.status(500).send('Ocurrio un error en la base de datos')
    }
}

exports.eliminaFavorito = async (req,res,next) =>{
    let {id,prdid} = req.params;
    try {
        const result = await fav.eliminaFav(id,prdid)
        if(result) res.json({res: true,msg:'Eliminado de favoritos'})
        else res.json({res: false,msg:'No existe en favoritos'})
    } catch (error) {
        res.status(500).send('Ocurrio un error en la base de datos')
    }
    
}

exports.eliminaFavoritoID = async (req,res,next)=>{
    let id = req.params.id
    try {
        const data = await fav.eliminaFavId(id)
        if(data) res.json({res: data,msg:'Se elimino de tus favoritos'})
        else res.json({res:data,msg:'Ocurrio un error'})    
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}