const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const apiRouter = express.Router()


const Puerto = 8080 || process.env.PORT

//Inicializo el server
http.listen(Puerto,()=>console.log(`Servidor en localhost:${Puerto}`))

//Configuraciones
app.engine("handlebars",handlebars())
app.set('view engine',"handlebars")
app.set('views','./views')
app.use('/api',apiRouter)
app.use(express.static('public'))

//EndPoint
apiRouter.get('/productos',(req,res)=>{
    res.render('home')
})

io.on('connection',(socket)=>{
    console.log('usuario conectado')

    socket.emit('mensaje',"Mensaje desde el servidor")
})

