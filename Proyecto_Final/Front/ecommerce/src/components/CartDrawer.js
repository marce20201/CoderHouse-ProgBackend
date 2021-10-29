import React, { useState, useEffect } from 'react'
import {Drawer,Button,IconButton,Divider,CircularProgress} from '@mui/material'
import {ShoppingBag,Close} from '@mui/icons-material'
import './styles/cartDrawStyles.css'
import CartItem from './CartItem'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import Carrito from '../assets/carrito.png'
import { dltItem } from '../store/action/cart.action'

const SinProductos = ({msg}) =>{
    return(
        <>
            <div id="box-sinPrd">
                <div id="box-sinPrd-body">
                    <div id="box-img-sinprd">
                        <img src={Carrito} id="img-sinprd"/>
                    </div>
                    <p id="sinprd-title">{msg}</p>
                </div>
            </div>
        </>
    )
} 

const CartDrawer = ({open,toggle}) =>{

    const dispatch = useDispatch()
    const [cartPrd,setCartPrd] = useState([])
    const [msg,setMsg] = useState(null)
    const user = useSelector(state=>state.usr.usuario)
    const cart = useSelector(state=>state.cart.carrito)
    const [loading,setLoading] = useState(false)



    const cargaCarrito = async () =>{
        setLoading(true)
        await axios.get(`http://localhost:8080/api/carrito/${user}`)
                  .then(result=>{
                       if(result.data.res){
                           const productos = result.data.data.items
                           setCartPrd(productos)
                           setLoading(false)
                       }else{
                           setMsg(result.data.msg)
                       } 
                  }).catch(err=>console.log(err))   
    }

    const verificaListaCarrito = () =>{
        if(user){
             cargaCarrito()
        }else{
           if(cart.length > 0){
               setCartPrd(cart)
           }else{
               setMsg('Aun no tienes productos en tu carrito')
           }
            
        }
    }

    const eliminaProducto = (item) =>{
        setLoading(true)
        if(user){

        }else{
            /* console.log(`El id que llega para eliminar: ${id}`); */
            dispatch(dltItem(item))
            verificaListaCarrito()
            setLoading(false)
        }
    }


    useEffect(()=>{
        verificaListaCarrito()
    },[user,cart])

    

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


            {loading && <div id="cargando-items"><CircularProgress /></div>}
            {msg ? <SinProductos msg={msg} /> : <CartItem data={cartPrd} eliminaPrd={eliminaProducto}/>}    


             
            </div>
        </Drawer>
    )
}


export default CartDrawer;