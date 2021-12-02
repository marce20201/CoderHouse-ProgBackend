const express = require('express')
const app = express()

const Puerto = 8080 || process.env.PORT
const server = app.listen(Puerto,()=>{
    console.log('Servidor inicializado')
})

const productos = []

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}

app.get('/api/productos',(req,res)=>{  
    let respuesta 
    if(productos=='')
        respuesta = {error:'no hay productos cargados'}
    else
        respuesta = productos
        
    res.send(respuesta)
})

app.get('/api/productos/:id',(req,res)=>{
    let respuesta = productos.filter(dato => dato.id == [req.params.id]) 
    if(respuesta=='')
        respuesta = {error: 'producto no encontrado'}
    
    res.send(respuesta)
})

app.post('/api/productos',(req,res)=>{
    let objNuevo = {
        id: calculaId(),
        title:'Ejemplo',
        price:'2232',
        thumnail:'xxxxxxxxxxx'
    }
    productos.push(objNuevo)
    res.send({Guardado:{
        objNuevo
    }})
})