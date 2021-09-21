const productosController = require('../controller/productos')

//Exporto las rutas
module.exports = (router) => {
    router
        .post("/api/productos",productosController.createPrd)
        .get("/api/productos",productosController.getAllPrd)
        .get("/api/productos/:cod",productosController.getPrdCod)
        .get("/api/productos/nombre/:name",productosController.getPrdName)
        .get("/api/productos/precio/:desde/:hasta",productosController.getPrdPrice)
        .get("/api/productos/stock/:desde/:hasta",productosController.getPrdStock)
        .delete("/api/productos/:id",productosController.dltPrd)
        .put("/api/productos",productosController.updPrd)

    return router;
}