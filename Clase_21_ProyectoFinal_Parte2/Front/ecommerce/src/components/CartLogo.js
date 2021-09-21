import React from 'react'
import { useSelector } from 'react-redux';
import './styles/cartlogo.css'
import cartImage from './cart.png'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartLogo = () =>{

    const cont = useSelector(state=>state.cart.contador)
    /* console.log(cont) */

    return(
            <Link to={`/cart`}>
                <div id="cart-box">
                    <FontAwesomeIcon icon={faShoppingCart} id="cart-logo" />
                    <span className="badge bg-light text-dark" id="cont-item">
                        {cont}
                    </span>    
                </div>
            </Link>
    )
}


export default CartLogo;