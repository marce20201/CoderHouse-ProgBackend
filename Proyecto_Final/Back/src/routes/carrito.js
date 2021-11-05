const carritoController = require('../controller/carrito')

//Exporto las rutas
module.exports = (router) =>{
    router
        .post('/api/carrito',carritoController.addPrdCart)
        .get('/api/carrito/:id',carritoController.getAllPrdCart)
        .delete('/api/carrito/:id/:prdid',carritoController.dltPrdCart)
        .put('/api/carrito',carritoController.updPrdCant)

    return router;
}