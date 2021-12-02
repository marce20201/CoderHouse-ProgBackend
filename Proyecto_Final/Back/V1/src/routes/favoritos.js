const favController = require('../controller/favoritos')

module.exports = (router) =>{
    router
        .post('/api/favorito',favController.agregaFavorito)
        .get('/api/favorito/usr/:id',favController.cargaFavoritos)
        .get('/api/favorito/usr/:id/prd/:prdid',favController.verificaFavorito)
        .delete('/api/favorito/usr/:id/prd/:prdid',favController.eliminaFavorito)
        .delete('/api/favorito/:id',favController.eliminaFavoritoID)

    return router;
}