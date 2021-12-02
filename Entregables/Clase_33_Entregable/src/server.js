const express = require('express')
const {urlencoded,json} = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const app = express()

app.use(express.static('public'))
app.use(json())
app.use(urlencoded())
app.use(compression())
app.use(cors())


app.get('/',(req,res,next)=>{
    res.sendFile(__dirname + '/public/index.html') 
})

module.exports = app;