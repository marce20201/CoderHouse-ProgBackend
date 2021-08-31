const productosController = require('../controller/productos')

//Exporto las rutas
module.exports = (router) => {
    router
        .post("/api/productos",productosController.createPrd)
        .get("/api/productos",productosController.getAllPrd)

    return router;
}