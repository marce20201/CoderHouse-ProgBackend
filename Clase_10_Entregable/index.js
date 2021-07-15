const { urlencoded, json } = require('body-parser')
const express = require('express')
const app = express()
const router = express.Router()
const handlebars = require('express-handlebars')

const Puerto = 8080 || process.env.PORT
const server = app.listen(Puerto,()=>console.log(`Servidor en localhost:${Puerto}`))

app.use(urlencoded())
app.use(json())

app.engine("handlebars",handlebars())
app.set("view engine","handlebars")

app.use('/api',router);


const productos = []

const calculaId = () =>{
    if(productos=='')
        return 1
    else
        return productos.length + 1;
}

router.get('/productos/agregar',(req,res)=>{  
    res.render('addproduct')
})
router.get('/productos/vista',(req,res)=>{  
    res.render('list',{productos:productos})
})

router.get('/productos/:id',(req,res)=>{
    let array = productos.filter(dato => dato.id == [req.params.id])     
    res.render('list',{productos:array})
})

router.post('/productos',(req,res)=>{
     let {nombre,precio,foto} = req.body 
     let objNuevo = {
            id: calculaId(),
            nombre:nombre,
            precio:precio,
            foto: foto
        }
      productos.push(objNuevo)
      res.render('list',{productos:productos}) 
})

router.put('/productos/:id',(req,res)=>{
    let array = productos.filter(dato => dato.id == [req.params.id]) 

        let objetoModificado = {
            nombre:'Calculadora',
            precio:'4500',
            foto:'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png'
        }
        array.forEach(element => {
            element.nombre = objetoModificado.nombre
            element.precio = objetoModificado.precio
            element.foto = objetoModificado.foto
        });
    
    res.send('producto modificado')
})

router.delete('/productos/:id',(req,res)=>{
    let indice = productos.indexOf([req.params.id])
    /* console.log(indice) */
    productos.splice(indice,1)
    res.send('producto eliminado') 
})

