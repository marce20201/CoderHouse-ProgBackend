const app = require('./server')
const {getConnection} = require('./dao/db/connection')
const {PORT} = require('./config/globals')

//Ejecuto la funcion que conecta a la BD, devuelve una promesa
getConnection().then((msg)=>{
    console.log(msg)
    //Si se realiza la conexion a la BD se levanta el servidor
    app.listen(PORT,()=>{
        console.log(`Servidor corriendo en ${PORT}`)
    })    
}).catch(console.log)