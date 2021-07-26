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

const productos = []

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}


//EndPoint
/* apiRouter.get('/productos',(req,res)=>{
    
    res.render('home',io.emit('productos',productos))
}) */

io.on('connection',(socket)=>{
    console.log('usuario conectado')

    socket.emit('productos',productos)

    socket.on('objeto-nuevo',data=>{
        let ObjNuevo = {
            id: calculaId(),
            nombre: data.nombre,
            precio: data.precio,
            foto: data.foto
        }
        productos.push(ObjNuevo)
        io.sockets.emit('productos',productos)  
        console.log(productos)
    })


})

    
apiRouter.get('/productos',(req,res)=>{
     res.render('home',{productos: productos})  
})