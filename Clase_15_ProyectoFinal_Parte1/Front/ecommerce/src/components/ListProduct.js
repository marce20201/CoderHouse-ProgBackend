import React from 'react'
import './styles/listProduct.css'

const ListProduct = ({guardaDatos,buscarProducto}) =>{

    return(
        <div id="contenedor-form-list">
            <label for="id">Ingresa un ID de Producto</label>
            <input name="id" placeholder="aqui..." className="form-control" onChange={(value)=>guardaDatos(value)}/>
            <button className="btn btn-success" id="btn-search" onClick={buscarProducto}>Buscar</button>
        </div>
            
        
    )
}

export default ListProduct;