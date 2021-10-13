const express = require('express')
const app = express()
const PORT = parseInt(process.argv[2]) || 8080


app.get('/info',(req,res)=>{
    res.send(`<h1>Ruta info en Servidor localhost:<span style="color:blue">${PORT}</span> PID ${process.pid}</h1>`)
})
app.get('/randoms',(req,res)=>{
    res.send(`<h1>Ruta randoms en Servidor localhost:<span style="color:blue">${PORT}</span> PID ${process.pid}</h1>`)
})


app.listen(PORT,()=>console.log(`Servidor en localhost:${PORT}`))