const app = require('./server')
const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>console.log('Servidor iniciado'))