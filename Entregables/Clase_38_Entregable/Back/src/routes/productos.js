const prdController = require('../controller/productos')

module.exports = (router) =>{
    router
        .get('/api/productos',prdController.PrdGet)
        .delete("/api/productos/:id",prdController.dltPrd)
        .put("/api/productos",prdController.updPrd)


    return router;
}