const carritoController = require('../controller/carrito')

//Exporto las rutas
module.exports = (router) =>{
    router
        .post('/api/carrito',carritoController.addPrdCart)
        .get('/api/carrito',carritoController.getAllPrdCart)
        .delete('/api/carrito/:id',carritoController.dltPrdCart)

    return router;
}