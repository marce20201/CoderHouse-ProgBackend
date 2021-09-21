const express = require('express')
const cors = require('cors')
const compression = require('compression')
let {json,urlencoded} = require('body-parser');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

//Requiero las rutas
const routesPrd = require('./routes/productos') 
const routesCart = require('./routes/carrito')
const router = express.Router()


//Configuraciones
app.use(json());
app.use(urlencoded())
app.use(cors())
app.use(compression())

//Rutas
app.use(routesPrd(router))
app.use(routesCart(router)) 


//Socket
/* io.on('connection',(socket)=>{
    console.log('usuario conectado')

    mensajesController.findMsgIo()
        .then(res=>{
            socket.emit('mensajes',res)
        }).catch(err=>console.log(err))
        
    //Se envia mensaje
    socket.on('nuevo-mensaje',(data)=>{
        //Se envia devuelta al cliente
        io.sockets.emit('recibido',data)
        //Se guarda en la BD
        mensajesController.createMsgIo(data)
       
    })


})
 */

//Exporto el modulo app para ser iniciado en index.js
module.exports = {
    http,
    io
};
