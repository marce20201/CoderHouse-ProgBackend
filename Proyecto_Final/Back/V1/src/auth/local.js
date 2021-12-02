const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const usuariosServices = require('../services/usuarios')
const usrServices = new usuariosServices()
const userModel = require('../dao/models/usuarios')


const isValidPassword = (user,password)=>{
  return bcrypt.compareSync(password,user.contraseña)
}



module.exports = (passport) =>{

    passport.use('login',new LocalStrategy({
      usernameField:'email',
      passwordField:'password'
    },async(email,password,done)=>{
        /* console.log(`usuario login: ${email} contrasenia: ${password}`) */
        const user = await usrServices.buscaEmail(email)
        /* console.log(user) */
        if(!user){
          return done(null,false)
        }
        if(!isValidPassword(user,password)){
          /* console.log('Contrasenia invalida') */
          return done(null,false,{message: 'contrasnia invalida'})
        }
        return done(null,user)
    }))



    passport.serializeUser((user, done) => {
      /* console.log(`usuario: ${user}`); */
      done(null, user._id);
    });
    passport.deserializeUser(async(id, done) => {
      userModel.findById(id, (err, user) => {
        done(err, user);
      });
    });
}