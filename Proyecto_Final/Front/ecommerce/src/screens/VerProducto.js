import React,{useEffect,useState} from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import './styles/verPrdStyles.css'
import {KeyboardArrowLeft,KeyboardArrowRight,Shop,ShoppingCart,Favorite,FavoriteBorder} from '@mui/icons-material'
import {Divider,IconButton,TextField,Button,CircularProgress,Snackbar,Alert} from '@mui/material'
import NavBar from '../components/NavBar'
import PrdCategoria from '../components/PrdCategoria'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/action/cart.action'
import CartDrawer from '../components/CartDrawer'

const VerProducto = ({}) =>{

    const datosProducto = {
        _id:"",
        nombre: "",
        descripcion: "",
        codigo: 0,
        precio: 0,
        stock: 0,
        imagen: "",
        categoria: "",
        vendedor:"",
        cantidad: 0, 
    }

    const [msg,setMsg] = useState(null)
    const [openMsg,setOpenMsg] = useState(false)
    const [typeMsg,setTypeMsg] = useState(null)
    const user = useSelector(state=>state.usr.usuario)
    const dispatch = useDispatch()
    const location = useLocation()
    const [producto,setProducto] = useState(datosProducto)
    const [contador,setContador] = useState(0)
    const [loading,setLoading] = useState(false)
    const [openCart,setOpenCart] = useState(false)

    const toggleDrawer = () => setOpenCart(!openCart)

    const closeMsg = () => setOpenMsg(!openMsg)

    const agregarAlCarrito = () =>{

    }
    
    const verificaCarrito = () =>{
        if(contador == 0){
            setTypeMsg("warning")
            setMsg("Debes seleccionar al menos un producto")
            setOpenMsg(true)
        }else{
            setOpenMsg(false)
            if(user){
                agregarAlCarrito()
            }else{
                setTypeMsg("success")
                setMsg("El producto fue agregado a tu Carrito!")
                setOpenMsg(true)
                producto.cantidad = contador
                dispatch(addItem(producto))
                toggleDrawer()
            }
        }
    }

    const sumarestaContador = (op) =>{
        if(op==='suma')
            setContador(contador+1)
        else{
            if(contador>0)
                setContador(contador-1)
        }
    }

    const cargarProductoporId = async (id) =>{
        try {
                setLoading(true)
                await axios.get(`http://localhost:8080/api/productos/id/${id}`)
                     .then(res=>{
                             producto._id = res.data._id
                             producto.nombre = res.data.nombre
                             producto.descripcion =  res.data.descripcion
                             producto.codigo = res.data.codigo
                             producto.precio =  res.data.precio
                             producto.stock = res.data.stock
                             producto.imagen = res.data.imagen
                             producto.categoria = res.data.categoria
                             producto.vendedor = res.data.vendedor
                             setLoading(false)
                     }).catch(err=>console.log(err))
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        cargarProductoporId(location.state.producto)
    },[location.state.producto])

    return(
        <>
            <NavBar openCart={toggleDrawer}/>
            <div className="container" id="box-principal">
             {loading ? <CircularProgress />
                      : <div id="box-producto">
                            <div id="box-image">
                                <img src={producto.imagen} id="img-verprd"></img>
                            </div>
                            <div id="box-body">
                                <div id="box-price-Fav">
                                    <IconButton><FavoriteBorder id="fav-btn"/></IconButton>
                                </div>
                                <h3>{producto.nombre}</h3>
                                <p>Vendido por {producto.vendedor}</p>
                                <p id="price-prd">${producto.precio}</p>
                                <Divider/>
                                <p id="prd-descripcion">{producto.descripcion}</p>
                                <div id="box-cantidad-prd">
                                    <p id="titulo-selec-cant">Selecciona una cantidad</p>
                                    <div id="box-selec-cantidad">
                                        <IconButton onClick={()=>sumarestaContador('resta')}><KeyboardArrowLeft/></IconButton>
                                        <TextField 
                                            id="contador-input"
                                            value={contador}
                                            InputProps={{
                                                readOnly: true,
                                                }}
                                        />
                                        <IconButton onClick={()=>sumarestaContador('suma')}><KeyboardArrowRight/></IconButton>
                                    </div>
                                </div>
                                <div id="box-verpd-btn">
                                    <Button id="btn-buy" variant="contained" startIcon={<Shop />}>Comprar ahora</Button>
                                    <Button id="btn-cart" variant="outlined" startIcon={<ShoppingCart/>} onClick={()=>verificaCarrito()}>Agregar al Carrito</Button>
                                </div>
                            </div>
                     </div>}    
            </div>                  
            <PrdCategoria categoria={producto.categoria} prdid={producto.id} />
            {openCart && <CartDrawer open={openCart} toggle={toggleDrawer}/>}
            {openMsg && <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'left'}}  open={openMsg} autoHideDuration={3000} onClose={()=>closeMsg()}>
                        <Alert onClose={()=>closeMsg()} severity={typeMsg}>{msg}</Alert>
                    </Snackbar>}
        </>
    )
}

export default VerProducto;