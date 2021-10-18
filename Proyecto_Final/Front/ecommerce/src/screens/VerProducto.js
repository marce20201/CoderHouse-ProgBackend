import React,{useEffect,useState} from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import './styles/verPrdStyles.css'
import {KeyboardArrowLeft,KeyboardArrowRight,Shop,ShoppingCart,Favorite,FavoriteBorder} from '@mui/icons-material'
import {Divider,IconButton,TextField,Button,CircularProgress,LinearProgress} from '@mui/material'
import NavBar from '../components/NavBar'
import PrdCategoria from '../components/PrdCategoria'
import axios from 'axios'

const VerProducto = ({}) =>{

    const datosProducto = {
        id:"",
        nombre: "",
        descripcion: "",
        codigo: 0,
        precio: 0,
        stock: 0,
        imagen: "",
        categoria: "",
        vendedor:"" 
    }

    const location = useLocation()
    const [producto,setProducto] = useState(datosProducto)
    const [contador,setContador] = useState(0)
    const [loading,setLoading] = useState(false)

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
                             producto.id = res.data._id
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
        <div>
            <NavBar />
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
                                    <Button id="btn-cart" variant="outlined" startIcon={<ShoppingCart/>}>Agregar al Carrito</Button>
                                </div>
                            </div>
                     </div>}    
            </div>                  
            <PrdCategoria categoria={producto.categoria} prdid={producto.id} />
        </div>
    )
}

export default VerProducto;