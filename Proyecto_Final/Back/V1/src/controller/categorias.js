const categoriaService = require('../services/categorias')
const categ = new categoriaService()

exports.crearCategoria = async (req,res,next) =>{
    /* console.log(req.body)
    console.log(`Se esta creando la categoria ${req.body.descripcion}`) */
    try {
        await categ.agregarCategoria(req.body)
        res.json({msg: 'Se agrego la categoria'})
    } catch (error) {
        res.status(500).send('Ocurrio un error en la peticion')
    }
}