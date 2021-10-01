const usuariosServices = require('../services/usuarios')
const usr = new usuariosServices()

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((email, password, done)=>{
        /* usrModel.findOne({ email: email },(err, user)=> {
        console.log(user)
        }); */
        console.log('imprime')
    }
));


exports.loginUser = passport.authenticate('local',{successRedirect:'/'}), (req,res,next) => {
    res.send('ok')
}