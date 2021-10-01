import React from 'react'
import { useSelector } from 'react-redux';
import './styles/cartlogo.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Badge} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'

const CartLogo = () =>{

    const cont = useSelector(state=>state.cart.contador)
    /* console.log(cont) */

    return(
            <Link to={`/cart`}>
                <div>
                    <Badge badgeContent={cont} color="primary" className="cart-box">
                        <ShoppingCart id="cart-logo" />
                    </Badge>
                </div>
                
            </Link>
    )
}


export default CartLogo;