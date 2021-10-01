const usuarioController = require('../controller/usuarios')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use('local',new LocalStrategy((email, password, done)=>{
        /* usrModel.findOne({ email: email },(err, user)=> {
        console.log(user)
        }); */
        console.log('imprime')
    }
));


//Exporto las rutas
module.exports = (router) => {
    router
        .get("/api/login",passport.authenticate('local'),(req,res)=>{
            console.log('ok')
        })

    return router;
}