/* const usuariosServices = require('../services/usuarios')
const usr = new usuariosServices() */
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;


module.exports = () =>{
      passport.use('login',new LocalStrategy(function(email, password, done) {
            usrModel.findOne({ email: email },(err, user)=> {
            console.log(user)
          });
        }
      ));
    
    passport.use('signup',
        
    )
}
