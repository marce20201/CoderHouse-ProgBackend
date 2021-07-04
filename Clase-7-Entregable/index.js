const express = require('express')
const fs = require('fs')
const app = express()

const puerto = process.env.PORT || 8080;
const server = app.listen(puerto,()=>{
    console.log('servidor inicializado')
})

let count1 = 0
let count2 = 0

app.get('/items',(req,res)=>{
    try{
        count1 += 1
        let data = fs.readFileSync('./productos.txt','utf-8')
        let objeto = JSON.parse(data)
        let arrayProd = []
        objeto.forEach(element => {
            arrayProd.push(element.title)
        });
        let ObjetoProd = {
            items:arrayProd,
            cantidad: arrayProd.length
        }
        res.send(JSON.stringify(ObjetoProd,null,'\t'))
    }catch(err){
        console.log(err)
    }
})

app.get('/item-random',(req,res)=>{
    try{
        count2 += 1
        let data = fs.readFileSync('./productos.txt','utf-8')
        let objeto = JSON.parse(data)
        let arrayProd = []
        objeto.forEach(element => {
            arrayProd.push(element.title)
        });
        let numRandom = (Math.random() * (arrayProd.length - 0) + 0).toFixed(0)
        let ObjetoProd = {
            item: arrayProd[numRandom],
        }
        res.send(JSON.stringify(ObjetoProd,null,'\t'))
    }catch(err){
        console.log(err)
    }
})

app.get('/visitas',(req,res)=>{
    try{
        let objVisitas = {
            visitas:{
                item1: count1,
                item2: count2
            }
        }
        res.send(JSON.stringify(objVisitas,null,'\t'))
    }catch(err){
        console.log(err)
    }
})