import React from 'react'
import './styles/cartItemstyles.css'

const CartItem = ({carritoLista,deleteItem}) =>{

    return(
        <div className="list-group">
            {carritoLista.map(data=>{
                return(
                  <div id="caja-principal">
                    <div className="d-flex w-100 justify-content-evenly">
                        <div className="d-flex justify-content-flex-start">
                            <img src={data.producto.foto} id="img-prd"></img>
                            <div className="d-grid" id="caja-detalle">
                                <p className="mb-1">Codigo: {data.producto.codigo}</p>
                                <h5 className="mb-1">{data.producto.nombre}</h5>
                                <p className="mb-1">{data.producto.descripcion}</p>
                                <p className="mb-1">${data.producto.precio}</p>
                                <small id="stock">{data.producto.stock>0?'En Stock':'Sin Stock'}</small>
                                <button className="btn btn-danger" id="btn-dlt" onClick={()=>deleteItem(data.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                  </div>
                )
            })}
        </div>
    )
}

export default CartItem;