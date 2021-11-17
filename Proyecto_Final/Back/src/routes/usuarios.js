const usuarioController = require('../controller/usuarios')
const passport = require('passport')
require('../auth/local')(passport)


//Exporto las rutas
module.exports = (router) => {
    router
        .post("/login",passport.authenticate('login',{failureRedirect:'/api/loginfail'}),usuarioController.loginUser)
        .post("/register",usuarioController.registrarUsuario)
        .get("/loginfail",usuarioController.loginFail)
        .get("/logout",usuarioController.logout)
        .get("/usr/:id",usuarioController.buscaUsuario)
        .post("/email",usuarioController.sendEmail)
        .get("/email/verificacion/:clave",usuarioController.verificaClave)
        .post("/message",usuarioController.sendMsg)


    return router;
}