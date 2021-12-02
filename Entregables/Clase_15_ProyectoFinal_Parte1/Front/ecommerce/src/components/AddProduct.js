import React from 'react'
import './styles/addProduct.css'

const AddProduct = ({guardaDatos,agregaProducto}) =>{

    return(
        <div className="" id="contenedor-form">
           <div className="">
           <label className="control-label" for="nombre">Nombre</label>
            <input name="nombre" className="form-control" onChange={(value)=>guardaDatos("nombre",value)}/>

            <label for="descripcion">Descripcion</label>
            <input name="descripcion" className="form-control" onChange={(value)=>guardaDatos("descripcion",value)}/>

            <label for="codigo">Codigo</label>
            <input name="codigo" className="form-control" onChange={(value)=>guardaDatos("codigo",value)}/>

            <label for="precio">Precio</label>
            <input name="precio" className="form-control" onChange={(value)=>guardaDatos("precio",value)}/>

            <label for="stock">Cantidad de Stock</label>
            <input name="stock" className="form-control" onChange={(value)=>guardaDatos("stock",value)}/>

            <label for="imagen">URL imagen</label>
            <input name="imagen" className="form-control" onChange={(value)=>guardaDatos("foto",value)}/>

            <button className="btn btn-success" id="btn-add" onClick={agregaProducto}>Agregar</button>
           </div>
        </div>
    )
}

export default AddProduct;

