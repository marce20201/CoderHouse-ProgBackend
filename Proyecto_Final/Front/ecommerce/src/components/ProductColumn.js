import React,{useState,useEffect} from 'react'
import ProductItem from './ProductItem';
import './styles/productItem.css'
import {cargarProductos,eliminarProducto,buscarPrdStock,buscarPrdCod,buscarPrdNombre,buscarPrdPrecio,agregarCarrito} from '../api'
/* import Cargando from './Cargando'; */
import ModalUpdate from './ModalUpdate';
import Search from './Search'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import ModalAddPrd from './ModalAddPrd'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/action/cart.action';

const ProductColumn = () =>{

    const [isFetch,setIsFetch] = useState(false)
    const [products,setProducts] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [prdUpdate,setPrdUpdate] = useState({})
    const [modalAdd,setModalAdd] = useState(false)
    const dispatch = useDispatch()

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onCloseModalAdd = () => setModalAdd(!modalAdd)
    const onClose = () => setShowModal(!showModal)

    const updatePrd = (prd)=>{
        setPrdUpdate(prd)
        setShowModal(true)
    } 

    const cargaProductos = async () =>{
        setIsFetch(true)
        const data = await cargarProductos()
        const productos = []
          data.forEach(element=>{
               productos.push(element)
           })
        setProducts(productos)
        setIsFetch(false)
    }

    const eliminaProducto = async (prdId) =>{
        setIsFetch(true)
        const data = await eliminarProducto(prdId)
        if(data.status == 200){
            cargaProductos()
            setIsFetch(false)
        }else{
            alert('Ocurrio un error')
            setIsFetch(false)
        }
    }

    //Funciones de Busqueda
    const BuscarProductoRangoStock = async (desde,hasta) =>{
        if(desde > 0 && hasta > 0){
            setIsFetch(true)
            const data = await buscarPrdStock(desde,hasta)
            const productos = []
            data.data.forEach(element=>{
                productos.push(element)
            })
            setProducts(productos)
            setIsFetch(false)
        }else{
            cargaProductos()
        }
    }

    const BuscarProductoRangoPrecios = async (desde,hasta) =>{
        if(desde > 0 && hasta > 0){
            setIsFetch(true)
            const data = await buscarPrdPrecio(desde,hasta)
            const productos = []
            data.data.forEach(element=>{
                productos.push(element)
            })
            setProducts(productos)
            setIsFetch(false)
      }else{
            cargaProductos()
      }
     }

     const BuscarProductoporNombre = async (prdNombre) => {
         console.log(prdNombre)
        if(prdNombre){
            setIsFetch(true)
            const data = await buscarPrdNombre(prdNombre)
            const productos = []
            productos.push(data.data)
            setProducts(productos)
            setIsFetch(false)
        }else{
            cargaProductos()
        }
   }

   const BuscarProductoporCod = async (prdCod)=>{
    if(prdCod){
        setIsFetch(true)
        const data = await buscarPrdCod(prdCod)
        const productos = []
        productos.push(data.data)
        setProducts(productos)
        setIsFetch(false)
    }else{
        cargaProductos()
    }
}

    const agregaProductoCarrito = async (prd) =>{
        const data = await agregarCarrito(prd)
        dispatch(addItem())
        console.log(data)
    }

    useEffect(()=>{
        cargaProductos()
    },[products])

    return(
        <div>
            <div className="container">
                <h3 id="prd-title">Productos</h3>
                <div id="box-productos">
                    {products.map((data)=>{
                            return(
                                <ProductItem 
                                    key={data.codigo}
                                    data={data} 
                                    expandir={expanded}
                                    expandirEvent={handleExpandClick}
                                    deletePrd={eliminaProducto} 
                                    updatePrd={updatePrd} 
                                    addCart={agregaProductoCarrito}
                                />  
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default ProductColumn;