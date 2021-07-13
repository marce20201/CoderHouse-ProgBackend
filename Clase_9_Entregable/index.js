const { urlencoded, json } = require('body-parser')
const express = require('express')
const app = express()
const router = express.Router()

const Puerto = 8080 || process.env.PORT
const server = app.listen(Puerto,()=>console.log(`Servidor en localhost:${Puerto}`))

app.use(urlencoded())
app.use(json())

const productos = []

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}

router.get('/productos',(req,res)=>{  
    let respuesta 
    if(productos=='')
        respuesta = {error:'no hay productos cargados'}
    else
        respuesta = productos
        
    res.send(respuesta)
})

router.get('/productos/:id',(req,res)=>{
    let respuesta = productos.filter(dato => dato.id == [req.params.id]) 
    if(respuesta=='')
        respuesta = {error: 'producto no encontrado'}
    
    res.send(respuesta)
})

router.post('/productos',(req,res)=>{
     let {title,price,image} = req.body 
     let respuesta = ''
     if(title == '' || price == '' || image == '')
        respuesta = '<h1>campos vacios</h1>'
    else{
        let objNuevo = {
            id: calculaId(),
            title:title,
            price:price,
            thumnail:image
        }
        productos.push(objNuevo)
        respuesta = '<h1>producto agregado</h1>'
    }
    res.send(respuesta) 
})

router.put('/productos/:id',(req,res)=>{
    let respuesta = productos.filter(dato => dato.id == [req.params.id]) 
    if(respuesta=='')
        respuesta = {error: 'producto no encontrado'}
    
    res.send(respuesta)
})

router.delete('/productos',(req,res)=>{
    res.send('delete funciona')
})

app.use('/api',router);
app.use(express.static('public'))