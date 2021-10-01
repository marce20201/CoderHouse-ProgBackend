const passport = require('./index')
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../dao/models/usuarios')

module.exports = () =>{
    passport.use('login',
    new LocalStrategy(function(email, password, done) {
          userModel.findOne({ email: email },(err, user)=> {
              console.log('llega al login')
             console.log(user)
          });
        }
      ));
}