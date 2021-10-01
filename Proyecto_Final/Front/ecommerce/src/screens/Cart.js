import React, { useEffect,useState } from 'react'
import NavBar from '../components/NavBar';
import './styles/cartstyles.css'
import Message from '../components/Message';
import axios from 'axios';
import CartItem from '../components/CartItem'
import ListProduct from '../components/ListProduct';
import { useDispatch } from 'react-redux';
import { dltItem } from '../store/action/cart.action';


const Cart = () =>{

    /* const dispatch = useDispatch()
    const [carrito,setCarrito] = useState([])
    const [buscar,setBuscar] = useState('')

    const guardaDatos = (event) =>{
        setBuscar(event.target.value)
    }

    const eliminarItemCarrito = (itemId) =>{
        axios.delete(`http://localhost:8080/carrito/borrar/${itemId}`)
             .then(res=>{
                console.log(res)
                dispatch(dltItem())
                cargaCarrito()
             })
             .catch(err=>console.log(err))
    }

    const cargaCarrito = () =>{
        axios.get(`http://localhost:8080/carrito/listar/${buscar}`)
             .then(result=>{
                 const carrito = []
                 result.data.forEach(element => {
                     carrito.push(element)
                 });
                 setCarrito(carrito)
             }).catch(err=>console.log(err))
    }
  
    useEffect(()=>{
        cargaCarrito()
    },[])
 */
    return(
        <div>
            <NavBar />
            <div className="container" id="box-cart">
                <div id="box-cart-prd">
                {/*  <p>Carrito de compras</p>
                    <ListProduct guardaDatos={guardaDatos} buscarProducto={cargaCarrito}/>
                    <hr></hr>
                    {carrito.length>0
                            ? <CartItem carritoLista={carrito} deleteItem={eliminarItemCarrito}/>
                            : <Message tipo="alert alert-warning" mensaje="No hay productos en tu carrito"/>} */}
                    <CartItem />
                </div>
            </div>
        </div>
    )
}

export default Cart;