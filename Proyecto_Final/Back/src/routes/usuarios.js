const usuarioController = require('../controller/usuarios')
const passport = require('passport')
require('../auth/local')(passport)


//Exporto las rutas
module.exports = (router) => {
    router
        .post("/api/login",passport.authenticate('login',{failureRedirect:'/api/loginfail'}),usuarioController.loginUser)
        .post("/api/register",usuarioController.registrarUsuario)
        .get("/api/loginfail",usuarioController.loginFail)
        .get("/api/logout",usuarioController.logout)
        .get("/api/usr/:id",usuarioController.buscaUsuario)
      

    return router;
}