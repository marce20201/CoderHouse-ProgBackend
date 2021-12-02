import React from 'react'
import { useSelector } from 'react-redux';
import './styles/cartlogo.css'
import cartImage from './cart.png'
import { Link } from 'react-router-dom';

const CartLogo = () =>{

    const cont = useSelector(state=>state.cart.contador)
    /* console.log(cont) */

    return(
        <div id="cart-box">
            <Link to={`/cart`}>
            <button className="btn btn-primary">
             <img src={cartImage} id="img-cart"></img>
             <span className="badge bg-light text-dark">
               {cont}
            </span>
            </button>
            </Link>
        </div>
    )
}


export default CartLogo;