import React,{useState} from 'react'
import './styles/addProduct.css'
import camara from './camara.png'


const AddProduct = ({guardaDatos,agregaProducto}) =>{

    const [url,setUrl] = useState('')
  

    return(
        <div className="" id="contenedor-form">
          <div id="cajaform">
          <label className="control-label" for="nombre">Nombre</label>
            <input type="text" name="nombre" className="form-control" onChange={(value)=>guardaDatos("nombre",value)}/>

            <label for="descripcion">Descripcion</label>
            <input type="text" name="descripcion" className="form-control" onChange={(value)=>guardaDatos("descripcion",value)}/>

            <label for="codigo">Codigo</label>
            <input type="number" name="codigo" className="form-control" onChange={(value)=>guardaDatos("codigo",value)}/>

            <label for="precio">Precio</label>
            <input type="number" name="precio" className="form-control" onChange={(value)=>guardaDatos("precio",value)}/>

            <label for="stock">Cantidad de Stock</label>
            <input type="number" name="stock" className="form-control" onChange={(value)=>guardaDatos("stock",value)}/>

            <div className="contenedor-imagen">
                <img src={url==''?camara:url} id="img-add"></img>
            </div>

            <label for="imagen">URL imagen</label>
            <input type="text" name="imagen" className="form-control" onChange={(value)=>guardaDatos("foto",value)} onBlur={(value)=>setUrl(value.target.value)}/>
            
            <div className="contenedor-boton">
              <button className="btn btn-primary" id="btn-add" onClick={agregaProducto}>Agregar</button>
            </div>
          </div> 
        </div>
    )
}

export default AddProduct;

