import axios from "axios"

export const agregarProducto = async (prd) =>{
    let respuesta 
    await axios.post('http://localhost:8080/api/productos',{prd})
          .then(function (response) {
            respuesta = response.data.msg
          })
          .catch(function (error) {
            respuesta = error
    });
    
    return respuesta
}

export const cargarProductos = async () =>{
    let respuesta
    await axios.get('http://localhost:8080/api/productos')
            .then((res)=>{
                respuesta = res.data
            }).catch((err)=>{
                respuesta = 'Existio un error con el servidor'
            })
    return respuesta
}