//Extraigo el puerto desde las variables globales
const { PORT } = require('./config/globals')
const { getConnection } = require('./dao/db/connection')
const {http} = require('./server')

//Ejecuto la funcion que conecta a la BD, devuelve una promesa
getConnection().then((msg)=>{
    console.log(msg)
    //Si se realiza la conexion a la BD se levanta el servidor
    http.listen(PORT,()=>{
        console.log(`Servidor corriendo en ${PORT}`)
    })    
}).catch(console.log)