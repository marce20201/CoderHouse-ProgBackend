import React from 'react'
import {Drawer,Button,IconButton,Divider} from '@mui/material'
import {ShoppingBag,Close} from '@mui/icons-material'
import './styles/cartDrawStyles.css'
import CartItem from './CartItem'

const CartDrawer = ({open,toggle}) =>{


    return(
        <Drawer open={open} anchor="right" onClose={()=>toggle()}>
            <div id="box-cart-drawer">
                <div id="box-option-top">
                     <div id="box-title-cart">
                          <ShoppingBag />
                          <h5>Tu Carrito</h5>
                     </div>
                    <IconButton onClick={()=>toggle()}>
                        <Close />
                    </IconButton>
                </div>
                <Divider />

            <CartItem />    


             <div id="box-total-btn">
                <h6>Total: $500</h6>
                <div id="box-btn-cart">
                    <Button variant="outlined">Vaciar Carrito</Button>
                    <Button variant="outlined">Generar Orden</Button>
                </div>
             </div>
            </div>
        </Drawer>
    )
}


export default CartDrawer;