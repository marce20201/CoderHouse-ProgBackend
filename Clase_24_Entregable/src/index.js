const PORT = process.env.PORT || 8080
const app = require('./server')



app.listen(PORT,()=>{
    console.log('Servidor corriendo')
})



/* //Configuraciones
app.engine("handlebars",handlebars())
app.set('view engine',"handlebars")
app.set('views','./views')
app.use('/api',apiRouter)
app.use(express.static('public'))

const productos = []
const mensajes = []

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}


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

    //Chat

    socket.emit('mensajes',mensajes)

    socket.on('nuevo-mensaje',data=>{
        let objMensaje = {
            ...data,
            time: moment().format('L, h:mm:ss a')
        }
        mensajes.push(objMensaje)
        io.sockets.emit('mensaje-nuevo',objMensaje)

        fs.appendFile('./mensajes.txt',`Autor: ${objMensaje.email}, Mensaje: ${objMensaje.text}\n`,error=>{
            if(error)
                console.log('hubo un error')
            else
                console.log('Mensaje guardado')
        })
    })

})

    
apiRouter.get('/productos',(req,res)=>{
     res.render('home',{productos: productos})  
}) */