const express = require('express')
const app = express()
const PORT = parseInt(process.argv[2]) || 8081
const compression = require('compression')
const pinoLogger = require('pino')()
const childpino = pinoLogger.child({env: 'DEVELOPMENT'})



app.use(compression())

app.get('/info',(req,res)=>{
    childpino.info(`Ruta info en Servidor localhost:${PORT} PID ${process.pid}`)
    res.send(`<h1>Ruta info en Servidor localhost:<span style="color:red">${PORT}</span> PID ${process.pid}</h1>`)
})
app.get('/randoms',(req,res)=>{
    childpino.info(`Ruta randoms en Servidor localhost:${PORT} PID ${process.pid}`)
    res.send(`<h1>Ruta randoms en Servidor localhost:<span style="color:red">${PORT}</span> PID ${process.pid}</h1>`)
})

app.listen(PORT,()=>console.log(`Servidor en localhost:${PORT}`))


