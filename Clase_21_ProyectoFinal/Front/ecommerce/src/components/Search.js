import React from 'react'
import './styles/searchstyles.css'

const Search = ({guardaBusqueda,buscarCod,buscarNombre,buscarPrecios,buscarStock}) =>{


    return(
        <div id="caja-btn">
                    <div id="caja-buscar">
                    
                        <label for="codigo">Buscar por Codigo</label>
                        <input name="codigo" type="number" className="form-control inputs" placeholder="Ingresa un ID de producto aqui..." onChange={(value)=>guardaBusqueda('codigo',value)} onBlur={()=>buscarCod()}/>
                        <label for="nombre">Buscar por nombre</label>
                        <input name="nombre" type="text" className="form-control inputs" placeholder="Ingresa un nombre aqui.." onChange={(value)=>guardaBusqueda('nombre',value)} onBlur={()=>buscarNombre()}/>

                        <label>Buscar por precio</label>
                        <div className="range">
                            <input type="number" className="form-control inputs rangeinput" placeholder="Desde..." onChange={(value)=>guardaBusqueda('precioDsd',value)}/>
                            <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..." onChange={(value)=>guardaBusqueda('precioHast',value)} onBlur={()=>buscarPrecios()}/>
                        </div>

                        <label>Buscar por stock</label>
                        <div className="range">
                            <input type="number" className="form-control inputs rangeinput" placeholder="Desde..." onChange={(value)=>guardaBusqueda('stockDsd',value)}/>
                            <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..." onChange={(value)=>guardaBusqueda('stockHast',value)} onBlur={()=>buscarStock()}/>
                        </div>
                    </div>
                </div>
    )
}


export default Search;