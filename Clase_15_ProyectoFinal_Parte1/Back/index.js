const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const prdRouter = express.Router()
const cartRouter = express.Router()
const moment = require('moment');
const fs = require('fs');
const { urlencoded, json } = require('body-parser');


app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*")    //Con esta linea defino la url que iria de mi frontend para las peticiones, en este caso se puso un * para que cualquiera pueda enviar peticiones, pero podria ir la url fija de mi frontend para que nadie mas tenga acceso
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type')
    next();
})

const Puerto = 8080 || process.env.PORT

//Inicializo el server
http.listen(Puerto,()=>console.log(`Servidor en localhost:${Puerto}`))

//Configuraciones
app.use(urlencoded())
app.use(json())
app.engine("handlebars",handlebars())
app.set('view engine',"handlebars")
app.set('views','./views')
app.use('/productos',prdRouter)
app.use('/carrito',cartRouter)
app.use(express.static('public'))

let productos = []
let mensajes = []
let carrito = []
let isAdmin = true

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}
const calculaIdCarrito = () =>{
    if(carrito=='')
        return 1
    else
        return carrito.length + 1;
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

    
prdRouter.get('/listar/:id?',(req,res)=>{
    if(req.params.id){
         res.send(productos.filter(prd=>prd.id == req.params.id))
     }else 
        res.send(productos)
})


prdRouter.post('/agregar',(req,res)=>{
    let respuesta = null
    if(isAdmin){
        let objNuevo = {
            id:calculaId(),
            timestamp:Date.now(),
            nombre:req.body.nuevoPrd.nombre,
            descripcion: req.body.nuevoPrd.descripcion,
            codigo:req.body.nuevoPrd.codigo,
            stock:req.body.nuevoPrd.stock,
            precio:req.body.nuevoPrd.precio,
            foto:req.body.nuevoPrd.foto
        }
        productos.push(objNuevo)
        respuesta="ok"
    }else{
        respuesta = {
            error: -1,
            descripcion: 'ruta productos/agregar',
            metodo: 'POST no autorizado'    
        }
    }
    res.send(respuesta) 
})


prdRouter.delete('/borrar/:id',(req,res)=>{
    let respuesta = null
    if(isAdmin){
        let indice
        productos.forEach(element=>{
            if(element.id == req.params.id){
                indice = productos.indexOf(element)
            }
        })
        productos.splice(indice,1)
        respuesta = 'eliminado'
        
    }else{
        respuesta = {
            error: -1,
            descripcion: 'ruta productos/borrar/:id',
            metodo: 'DELETE no autorizado'    
        }
    }
    res.send(respuesta)

})

prdRouter.put('/actualizar/:id',(req,res)=>{

    let respuesta = false
    if(req.params.id != ''){
        productos.forEach(prd=>{
            if(prd.id == req.params.id){
                prd.nombre = "tomate"
                prd.precio = 1234
                prd.foto = "https://image.flaticon.com/icons/png/128/1202/1202125.png"
                respuesta = true
            }
        })
    }
    res.send(respuesta)
})

//Carrito
cartRouter.get('/listar/:id?',(req,res)=>{
    if(req.params.id){
        res.send(carrito.filter(prd=>prd.id==req.params.id))
    }else{
        res.send(carrito)
    }
})

cartRouter.post('/agregar/:id_producto',(req,res)=>{
    let idProducto = req.params.id_producto;
    let prdCarrito = {}
    if(idProducto){
        productos.forEach(element=>{
            if(element.id==idProducto){
                prdCarrito = {
                    id: calculaIdCarrito(),
                    timestamp:Date.now(),
                    producto:{
                        id: element.id,
                        timestamp:element.timestamp,
                        nombre:element.nombre,
                        descripcion:element.descripcion,
                        codigo:element.codigo,
                        foto:element.foto,
                        precio:element.precio,
                        stock:element.stock
                    }
                }
            }
        })
        carrito.push(prdCarrito)
        /* console.log(carrito) */
        res.send('ok')
        
    }
})

cartRouter.delete('/borrar/:id',(req,res)=>{
   let indice
   carrito.forEach(element=>{
       if(element.id == req.params.id){
           /* console.log('encontrado') */
           indice = carrito.indexOf(element)
       }
   })
    carrito.splice(indice,1)
   res.send('ok')
})