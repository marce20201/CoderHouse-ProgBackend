const express = require('express')
const {urlencoded,json} = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const app = express()

app.use(json())
app.use(urlencoded())
app.use(compression())
app.use(cors())


app.get('/',(req,res,next)=>{
    res.send('<h1>Primer servidor en la nube</h1>')  
})

module.exports = app;