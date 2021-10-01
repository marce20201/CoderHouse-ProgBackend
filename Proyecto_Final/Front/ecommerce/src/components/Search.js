import React,{useState} from 'react'
import './styles/searchstyles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faFilter,faPlus} from '@fortawesome/free-solid-svg-icons'
import { TextField, InputAdornment } from '@mui/material'

const Search = ({buscarCod,buscarNombre,buscarPrecios,buscarStock,modalAdd}) =>{
    
    const tipoBusqueda = {
        codigo: 0,
        nombre: '',
        precioDsd:0,
        precioHast:0,
        stockDsd:0,
        stockHast:0
    }
    const [buscar,setBuscar] = useState(tipoBusqueda)

    const guardaBusqueda = (campo,event) =>{
        setBuscar({...buscar,[campo]:event.target.value})
    }

    

    return(
        <div id="caja-btn">
            <div id="box-title-filtros">
                <h3 id="filtros-titulo">Filtros</h3>
            </div>
            <div id="caja-buscar">   
              {/* <FontAwesomeIcon icon={faSearch} className="icon"/> */}
              <label for="nombre" className="labels">Buscar por Nombre</label>
              <input name="nombre" type="text" className="form-control inputs" placeholder="Ingresa un nombre aqui.." onChange={(value)=>guardaBusqueda('nombre',value)} onBlur={()=>buscarNombre(buscar.nombre)}/>

              <label for="codigo" className="labels">Buscar por Codigo</label>
              <input name="codigo" type="number" className="form-control inputs" placeholder="Ingresa un codigo aqui.." onChange={(value)=>guardaBusqueda('codigo',value)} onBlur={()=>buscarCod(buscar.codigo)}/>

              <label className="labels">Buscar por precio</label>
                <div className="range">
                    <input type="number" className="form-control inputs rangeinput" placeholder="Desde..." onChange={(value)=>guardaBusqueda('precioDsd',value)}/>
                    <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..." onChange={(value)=>guardaBusqueda('precioHast',value)} onBlur={()=>buscarPrecios(buscar.precioDsd,buscar.precioHast)}/>
              </div>

              <label className="labels">Buscar por stock</label>
              <div className="range">
                    <input type="number" className="form-control inputs rangeinput" placeholder="Desde..." onChange={(value)=>guardaBusqueda('stockDsd',value)}/>
                    <input type="number" className="form-control inputs rangeinput" placeholder="Hasta..." onChange={(value)=>guardaBusqueda('stockHast',value)} onBlur={()=>buscarStock(buscar.stockDsd,buscar.stockHast)}/>
              </div>           
            </div>
            {/* <div id="box-btn-aplicar">
                <button className="btn" id="btn-aplicar">Aplicar</button>     
            </div>  */}
        </div>
    )
}


export default Search;

/* 
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
*/