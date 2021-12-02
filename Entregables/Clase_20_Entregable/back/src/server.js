const express = require('express')
const routesMsg = require('./routes/mensajes') 
const cors = require('cors')
const compression = require('compression')
let {json,urlencoded} = require('body-parser');
const router = express.Router()
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mensajesController = require('./controller/mensajes')


//Configuraciones
app.use(json());
app.use(urlencoded())
app.use(cors())
app.use(compression())

//Rutas
app.use(routesMsg(router)) 


//Socket
io.on('connection',(socket)=>{
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


//Exporto el modulo app para ser iniciado en index.js
module.exports = {
    http,
    io
};
