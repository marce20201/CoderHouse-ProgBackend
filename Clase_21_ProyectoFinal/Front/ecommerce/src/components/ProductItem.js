import React from 'react'
import './styles/productItem.css'
import Modal from './Modal'
import sinImagen from './camara.png'

const ProductItem = ({data,deletePrd,addCart}) =>{

    console.log(data)
    return(
        <div className="col contenedor-prd-desc">
            <p id="prd-codigo">Codigo: {data.stock}</p>
            <div className="contenedor-img">
                <img src={data.foto==''?sinImagen:data.foto} alt="..." id="img-product" />
            </div>
            <h5 id="title-product">{data.nombre}</h5>
            <p id="descr-prd">{data.descripcion}</p>
            <p id="precio-sty">${data.precio}</p>
            <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
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