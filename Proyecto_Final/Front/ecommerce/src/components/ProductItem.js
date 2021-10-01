import React from 'react'
import './styles/productItem.css'
import sinImagen from './camara.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/action/cart.action'

const ProductItem = ({data,deletePrd,updatePrd,addCart}) =>{

    return(
        <div key={data.codigo} className="contenedor-prd-desc">
            <div className="card-body">
                    <div id="contenedor-img">
                        <img src={data.foto==''?sinImagen:data.foto} alt="..." id="img-product" />
                    </div> 
                    <div id="card-box-desc">
                        <div id="box-btn-top">
                            <h5 className="card-title" id="title-product">{data.nombre}</h5>
                            <FontAwesomeIcon icon={faTrashAlt} id="btn-delete" onClick={()=>deletePrd(data.codigo)} />
                        </div>
                        <hr style={{backgroundColor:'#D9D9D9'}}></hr>
                        <p id="descr-prd">{data.descripcion}</p>
                        <p id="precio-sty">${data.precio}</p>
                        <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
                        <div id="contenedor-btn">
                            {/* <button className="btn btn-danger" onClick={()=>deletePrd(data.id)}>Eliminar</button> */}
                            <button className="btn btn-options" id="btn-cart" onClick={()=>addCart(data)}>Agregar al Carrito</button>
                            <button type="button" className="btn btn-options" id="btn-update" onClick={()=>updatePrd(data)}>Actualizar</button>
                        </div>
                    </div>
                 </div>
           
        </div>
        
    )
}

export default ProductItem;


/*
<Modal nameModal="modalActualizar" tipo="Actualizar Datos" data={data} />

<div className="col">
              <div className="card">
                <p>Codigo: {data.stock}</p>
                <img src={data.foto==''?sinImagen:data.foto} className="card-img-top" alt="..." id="img-product" />
                 <div className="card-body">
                    <h5 className="card-title" id="title-product">{data.nombre}</h5>
                    <p>{data.descripcion}</p>
                    <p id="precio-sty">${data.precio}</p>
                    <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
                    <div id="contenedor-btn">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalActualizar">
                        Actualizar
                    </button>
                        <button className="btn btn-danger" onClick={()=>deletePrd(data.id)}>Eliminar</button>
                        <button className="btn btn-outline-primary" onClick={()=>addCart(data.id)}>Agregar al Carrito</button>
                    </div>
                 </div>
            </div>
            </div>



*/

/* 
<p id="prd-codigo">Codigo: {data.codigo}</p>
            <div className="contenedor-img">
                <img src={data.foto==''?sinImagen:data.foto} alt="..." id="img-product" />
            </div>
            <hr></hr>
            <h5 id="title-product">{data.nombre}</h5>
            <p id="descr-prd">{data.descripcion}</p>
            <p id="precio-sty">${data.precio}</p>
            <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
            <div id="contenedor-bnt">
                <button className="btn btn-danger" onClick={()=>deletePrd(data.codigo)}>Eliminar</button>
                <button className="btn btn-success" onClick={()=>updatePrd(data)}>Actualizar</button>
                 <button className="btn btn-outline-primary">Añadir al Carrito</button> 
                </div>
                 */