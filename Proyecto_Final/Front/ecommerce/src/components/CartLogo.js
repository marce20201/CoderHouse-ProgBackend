import React from 'react'
import { useSelector } from 'react-redux';
import './styles/cartlogo.css'
import { Link,useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Badge,IconButton} from '@mui/material'
import {ShoppingCartOutlined} from '@mui/icons-material'

const CartLogo = () =>{
    const history = useHistory()
    const cont = useSelector(state=>state.cart.contador)
    /* console.log(cont) */

    return(
            <IconButton onClick={()=>history.push('/cart')}>
                <Badge badgeContent={cont} color="primary" className="cart-box">
                    <ShoppingCartOutlined id="cart-logo" />
                </Badge>
            </IconButton>
    )
}


export default CartLogo;