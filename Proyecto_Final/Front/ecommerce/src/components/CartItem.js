import React,{useState,useEffect} from 'react'
import './styles/cartItemstyles.css'
import {Divider,Button} from '@mui/material'
import {Delete} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { dltItem } from '../store/action/cart.action'
import { cargaCarrito,borraCarrito } from '../api'
import Message from './Message'


const CartItem = ({carritoLista,deleteItem}) =>{

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const dispatch = useDispatch()

    const cargaTotal = () =>{
        let total = 0
        carrito.forEach(data=>{
            total += data.precio
        })
        setTotal(total)
    }

    const borraProductoCarrito = async (prdid) =>{
        const data = await borraCarrito(prdid)
        dispatch(dltItem())
        cargarProductosCarrito()
    }

    const cargarProductosCarrito = async () => {
        const data = await cargaCarrito()
        console.log(data.data)
        setCarrito(data.data)
    }


    useEffect(()=>{
        cargarProductosCarrito()
    },[])

    return(
        <div id="carrito">
            {carrito.length==0
                ? <Message tipo="alert alert-warning" mensaje="No hay productos en tu carrito" />
                : <div>
                    {carrito.map(data=>{
                    return(
                        <div key={data.codigo} id="carrito-item">
                            <img src={data.foto} id="img-prd"></img>
                            <div id="carrito-detalle">
                                <p id="cart-titulo-item">{data.nombre}</p>
                                <Divider />
                                <p id="cart-descripcion-item">{data.descripcion}</p>
                                <p id="cart-precio-item">${data.precio}</p>
                                <Button variant="outlined" startIcon={<Delete />} id="carrito-btn-del" onClick={()=>borraProductoCarrito(data.codigo)} >Eliminar del carrito</Button>
                            </div>
                        </div>
                    )
                 })}
                </div> 
            }
           {/*  <div id="carrito-total-box">
                <div id="carrito-total">
                    <p>Total: ${total}</p>
                </div>
            </div> */}
        </div>
    )
}

export default CartItem;

/* 
    <div >
            {carritoLista.map(data=>{
                return(
                  <div id="caja-principal">
                    <div className="d-flex w-100 justify-content-evenly">
                        <div className="d-flex justify-content-flex-start">
                            <img src={data.producto.foto} id="img-prd"></img>
                            <div className="d-grid" id="caja-detalle">
                                <p className="mb-1">Codigo: {data.producto.codigo}</p>
                                <h5 className="mb-1">{data.producto.nombre}</h5>
                                <p className="mb-1">{data.producto.descripcion}</p>
                                <p className="mb-1">${data.producto.precio}</p>
                                <small id="stock">{data.producto.stock>0?'En Stock':'Sin Stock'}</small>
                                <button className="btn btn-danger" id="btn-dlt" onClick={()=>deleteItem(data.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                  </div>
                )
            })}
        </div>

*/