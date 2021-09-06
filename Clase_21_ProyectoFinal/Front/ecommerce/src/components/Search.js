import React from 'react'
import './styles/searchstyles.css'

const Search = () =>{


    return(
        <div id="caja-btn">
                    {/* <button className="btn btn-primary" onClick={()=>opcionAgregar()}>Listar / Agregar Producto</button> */}
                    <div id="caja-buscar">
                        <label for="codigo">Buscar por Id</label>
                        <input name="codigo" type="text" className="form-control inputs" placeholder="Ingresa un ID de producto aqui..."/>
                        <label for="nombre">Buscar por nombre</label>
                        <input name="nombre" type="text" className="form-control inputs" placeholder="Ingresa un ID de producto aqui..."/>
                        <label>Buscar por precio</label>
                        <div className="range">
                            <input type="number" className="form-control inputs rangeinput" placeholder="Desde..."/>
                            <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..."/>
                        </div>
                        <label>Buscar por stock</label>
                        <div className="range">
                            <input type="number" className="form-control inputs rangeinput" placeholder="Desde..."/>
                            <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..."/>
                        </div>
                    </div>
                </div>
    )
}


export default Search;