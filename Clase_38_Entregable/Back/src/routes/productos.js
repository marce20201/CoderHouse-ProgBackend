const prdController = require('../controller/productos')

module.exports = (router) =>{
    router
        .get('/api/productos',prdController.PrdGet)


    return router;
}