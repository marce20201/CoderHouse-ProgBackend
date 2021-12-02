'use strict';

var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var apiRouter = express.Router();
var moment = require('moment');
var fs = require('fs');

var Puerto = 8080 || process.env.PORT;

//Inicializo el server
http.listen(Puerto, function () {
    return console.log('Servidor en localhost:' + Puerto);
});

//Configuraciones
app.engine("handlebars", handlebars());
app.set('view engine', "handlebars");
app.set('views', './views');
app.use('/api', apiRouter);
app.use(express.static('public'));

var productos = [];
var mensajes = [];

var calculaId = function calculaId() {
    if (productos == '') return 1;else return productos.length + 1;
};

io.on('connection', function (socket) {
    console.log('usuario conectado');

    socket.emit('productos', productos);

    socket.on('objeto-nuevo', function (data) {
        var ObjNuevo = {
            id: calculaId(),
            nombre: data.nombre,
            precio: data.precio,
            foto: data.foto
        };
        productos.push(ObjNuevo);
        io.sockets.emit('productos', productos);
        console.log(productos);
    });

    //Chat

    socket.emit('mensajes', mensajes);

    socket.on('nuevo-mensaje', function (data) {
        var objMensaje = {
            data: data,
            time: moment().format('L, h:mm:ss a')
        };
        mensajes.push(objMensaje);
        io.sockets.emit('mensaje-nuevo', objMensaje);

        fs.appendFile('./mensajes.txt', 'Autor: ' + objMensaje.email + ', Mensaje: ' + objMensaje.text + '\n', function (error) {
            if (error) console.log('hubo un error');else console.log('Mensaje guardado');
        });
    });
});

apiRouter.get('/productos', function (req, res) {
    res.render('home', { productos: productos });
});
