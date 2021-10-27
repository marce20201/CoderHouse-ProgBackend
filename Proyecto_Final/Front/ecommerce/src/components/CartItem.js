import React,{useState,useEffect} from 'react'
import './styles/cartItemstyles.css'
import {} from '@mui/icons-material'
import {Divider} from '@mui/material'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CartItem = ({carritoLista,deleteItem}) =>{

    const userId = useSelector(state=>state.usr.usuario)

    return(
        <>
            <div id="cart-item-box">
                <div id="cart-item-img-box">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_770144-MLA47726149524_102021-O.webp" id="cart-item-img"></img>
                </div>
                <div id="cart-item-detail">
                    <h6>Tv SMart</h6>
                    <p>$150000</p>
                    <p>1 X UNIDAD</p>
                </div>
            </div>
        </>
    )
}

export default CartItem;
