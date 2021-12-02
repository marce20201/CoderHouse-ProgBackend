const mensajesController = require('../controller/mensajes')

//Exporto las rutas
module.exports = (router) =>{
    router
        .post("/api/msj",mensajesController.createMsg)
        .get("/api/msj",mensajesController.findAll)

    return router;
}