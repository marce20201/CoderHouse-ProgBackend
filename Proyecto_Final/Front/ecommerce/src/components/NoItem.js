import React from 'react'
import {} from '@mui/material'
import './styles/noitemStyles.css'
import sinProductos from '../assets/sinproductos.png'


const NoItem = () =>{


    return(
        <div className="container" id="box-noitem">
            <div id="box-noitem-detail">
                <img src={sinProductos} id="box-img-noitem"></img>
                <h5 id="sin-productos">Sin productos</h5>
            </div>
        </div>
    )
}


export default NoItem;