import React,{useState,useEffect} from 'react'
import './styles/cartItemstyles.css'
import {} from '@mui/icons-material'
import {Divider,Button,IconButton} from '@mui/material'
import {Delete} from '@mui/icons-material'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CartItem = ({data,eliminaPrd}) =>{

    const total = useSelector(state=>state.cart.total)
    /* console.log(`El total es: ${total}`); */

    return(
        <>
            {data.map((item)=>{
                    return(
                        <div key={item._id}>
                            <div id="cart-dlt-box">
                                <IconButton onClick={()=>eliminaPrd(item)}>
                                    <Delete id="cart-dlt" />
                                </IconButton>
                            </div>
                            <div id="cart-item-box"  >
                                <div id="cart-item-img-box">
                                    <img src={item.imagen} id="cart-item-img"></img>
                                </div>
                                <div id="cart-item-detail">
                                    <h6>{item.nombre}</h6>
                                    <p>${item.precio}</p>
                                    <p>{item.cantidad} X UNIDAD</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            <div id="box-total-btn">
                <h6>Total: {total} </h6>
                <div id="box-btn-cart">
                    <Button variant="outlined">Vaciar Carrito</Button>
                    <Button variant="outlined">Generar Orden</Button>
                </div>
             </div>
        </>
    )
}

export default CartItem;
