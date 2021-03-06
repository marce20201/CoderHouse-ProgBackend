const express = require('express')
const cors = require('cors')
const compression = require('compression')
let {json,urlencoded} = require('body-parser');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const session = require('express-session')
const passport = require('passport')

//Requiero las rutas
const routesPrd = require('./routes/productos') 
const routesCart = require('./routes/carrito')
const routesUser = require('./routes/usuarios')
const routesCateg = require('./routes/categorias')
const routesFav = require('./routes/favoritos')
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
app.use(routesPrd(router))
app.use(routesCart(router)) 
app.use('/api',routesUser(router))
app.use(routesCateg(router))
app.use(routesFav(router))




//Exporto el modulo app para ser iniciado en index.js
module.exports = {
    http,
    io
};
