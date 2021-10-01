const express = require('express')
const cors = require('cors')
const compression = require('compression')
let {json,urlencoded} = require('body-parser');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const session = require('express-session')
const passport = require('passport')
const authPassport = require('./auth')

//Requiero las rutas
const routesPrd = require('./routes/productos') 
const routesCart = require('./routes/carrito')
const routesUser = require('./routes/usuarios')
const router = express.Router()


//Configuraciones
app.use(json());
app.use(urlencoded())
app.use(cors())
app.use(compression())
app.use(session({
    secret: 'secreto',
    saveUninitialized:true,
    resave:true
    /* cookie: {
        maxAge: 2000
    } */
}))
app.use(passport.initialize())
app.use(passport.session())

//Rutas
app.use('/auth',authPassport)


app.use(routesPrd(router))
app.use(routesCart(router)) 
app.use(routesUser(router))

//Exporto el modulo app para ser iniciado en index.js
module.exports = {
    http,
    io
};
