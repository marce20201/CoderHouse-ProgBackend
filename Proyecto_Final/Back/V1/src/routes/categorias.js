const categoriaController = require('../controller/categorias')

module.exports = (router)=>{
    router
        .post('/api/categoria',categoriaController.crearCategoria)

    return router;
}