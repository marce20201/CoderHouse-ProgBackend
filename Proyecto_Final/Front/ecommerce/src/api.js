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

export const buscarPrdCod = async (prdCod) =>{
    let respuesta
    await axios.get(`http://localhost:8080/api/productos/${prdCod}`)
          .then(res=>{
              respuesta = res
          }).catch(console.log())

    return respuesta;
}

export const buscarPrdNombre = async (prdName)=>{
    let respuesta
    await axios.get(`http://localhost:8080/api/productos/nombre/${prdName}`)
         .then(res=>{
             respuesta = res
         }).catch(console.log())
    return respuesta
}

export const buscarPrdPrecio = async (desde,hasta)=>{
    let respuesta
    await axios.get(`http://localhost:8080/api/productos/precio/${desde}/${hasta}`)
        .then(res=>{
           respuesta = res
        }).catch(console.log())

    return respuesta
}

export const buscarPrdStock = async (desde,hasta)=>{
    let respuesta
    await axios.get(`http://localhost:8080/api/productos/stock/${desde}/${hasta}`)
        .then(res=>{
            respuesta = res
        }).catch(console.log())
    
    return respuesta
}

export const eliminarProducto = async (prdCod)=>{
    let respuesta
    await axios.delete(`http://localhost:8080/api/productos/${prdCod}`)
        .then(res=>{
            respuesta = res
        }).catch(console.log())

    return respuesta
}

export const actualizarProducto = async(prd)=>{
    let respuesta
    await axios.put(`http://localhost:8080/api/productos`,{prd})
         .then(res=>{
            respuesta = res
         }).catch(console.log())

    return respuesta
}

//Carrito
export const agregarCarrito = async (prd) =>{
    let respuesta
    await axios.post('http://localhost:8080/api/carrito',{prd})
        .then(res=>{
            respuesta = res
        }).catch(console.log())

    return respuesta;
}

export const cargaCarrito = async () =>{
    let respuesta
    await axios.get(`http://localhost:8080/api/carrito`)
        .then(res=>{
            respuesta = res
        }).catch(console.log())

    return respuesta;
}

export const borraCarrito = async (prdid) =>{
    let respuesta
    await axios.delete(`http://localhost:8080/api/carrito/${prdid}`)
        .then(res=>{
            respuesta = res
        }).catch(console.log())

    return respuesta;
}