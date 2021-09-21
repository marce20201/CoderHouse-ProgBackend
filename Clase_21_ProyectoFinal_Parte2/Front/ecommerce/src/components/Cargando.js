import React from 'react'
import {Spinner} from 'react-bootstrap'
import './styles/cargandoStyles.css'

const Cargando = () =>{

    return(
        <div id="contenedor-cargando">
            <Spinner animation="border" variant="primary" size={40}/>
        </div>
    )
}

export default Cargando;