import React from 'react'
import { useSelector } from 'react-redux';
import './styles/cartlogo.css'
import cartImage from './cart.png'
import { Link } from 'react-router-dom';

const CartLogo = () =>{

    const cont = useSelector(state=>state.cart.contador)
    /* console.log(cont) */

    return(
            <Link to={`/cart`}>
                <div id="cart-box">
                    <img src={cartImage} id="img-cart"></img>
                    <span className="badge bg-light text-dark">
                        {cont}
                    </span>    
                </div>
            </Link>
    )
}


export default CartLogo;