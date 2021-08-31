const carritoController = require('../controller/carrito')

//Exporto las rutas
module.exports = (router) =>{
    router
        .post('/api/carrito/add',carritoController.addPrdCart)
        .get('/api/carrito',carritoController.getAllPrdCart)

    return router;
}