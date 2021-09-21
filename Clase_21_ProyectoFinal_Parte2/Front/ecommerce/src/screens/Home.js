import React,{useEffect,useState} from 'react'
import NavBar from '../components/NavBar';
import ProductColumn from '../components/ProductColumn';
import './styles/homeStyles.css'
import axios from 'axios';
import Message from '../components/Message';
import { useDispatch } from 'react-redux';
import {addItem} from '../store/action/cart.action'
import Search from '../components/Search';
import {cargarProductos,buscarPrdCod,buscarPrdNombre,buscarPrdPrecio,buscarPrdStock,eliminarProducto} from '../api'
import Cargando from '../components/Cargando';
import ModalUpdate from '../components/ModalUpdate';
import ModalAddPrd from '../components/ModalAddPrd';

const Home = () =>{

    const tipoBusqueda = {
        codigo: 0,
        nombre: '',
        precioDsd:0,
        precioHast:0,
        stockDsd:0,
        stockHast:0
    }

    const dispatch = useDispatch()
    const [products,setProducts] = useState([])
    const [buscar,setBuscar] = useState(tipoBusqueda)
    const [isFetch,setIsFetch] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [prdUpdate,setPrdUpdate] = useState({})
    const [msg,setMsg] = useState('')
    const [modalAdd,setModalAdd] = useState(false)

    const modalAddOpen = () => setModalAdd(true)
    const modalAddClose = () => setModalAdd(!modalAdd)


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


    const BuscarProductoporCod = async ()=>{
        if(buscar.codigo !== ''){
            setIsFetch(true)
            const data = await buscarPrdCod(buscar.codigo)
            const productos = []
            productos.push(data.data)
            setProducts(productos)
            setIsFetch(false)
        }else{
            cargaProductos()
        }
    }

    const BuscarProductoporNombre = async () => {
        if(buscar.nombre !== ''){
            setIsFetch(true)
            const data = await buscarPrdNombre(buscar.nombre)
            const productos = []
            productos.push(data.data)
            setProducts(productos)
            setIsFetch(false)
        }else{
            cargaProductos()
        }
   }

   const BuscarProductoRangoPrecios = async () =>{
      if(buscar.precioDsd > 0 && buscar.precioHast > 0){
       setIsFetch(true)
       const data = await buscarPrdPrecio(buscar.precioDsd,buscar.precioHast)
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
   
   const BuscarProductoRangoStock = async () =>{
    if(buscar.stockDsd > 0 && buscar.stockHast > 0){
        setIsFetch(true)
        const data = await buscarPrdStock(buscar.stockDsd,buscar.stockHast)
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
    



    const guardaBusqueda = (campo,event) =>{
        setBuscar({...buscar,[campo]:event.target.value})
    }

   /*  const agregarCarrito = (itemid) =>{
        console.log(itemid)
        axios.post(`http://localhost:8080/carrito/agregar/${itemid}`)
             .then(result=>{
                 console.log(result)
                 dispatch(addItem())
                 
             }).catch(err=>console.log(err))
    } */

    const updatePrd = (prd)=>{
        setPrdUpdate(prd)
        setShowModal(true)
    }
    const onClose = () => setShowModal(!showModal)

    useEffect(()=>{
        cargaProductos()
    },[])

    return(
        <body>
            <NavBar />
            <Search guardaBusqueda={guardaBusqueda} buscarCod={BuscarProductoporCod} buscarNombre={BuscarProductoporNombre} buscarPrecios={BuscarProductoRangoPrecios} buscarStock={BuscarProductoRangoStock} modalAdd={modalAddOpen} />
            <ModalAddPrd show={modalAdd} close={modalAddClose} cargaPrd={cargaProductos} isLoading={setIsFetch}/>
           
            {isFetch && <Cargando />}
            <div className="container" id="box-items">
                <ProductColumn products={products} deletePrd={eliminaProducto} /* addCart={agregarCarrito} */ updatePrd={updatePrd}/>
            </div>
        </body>
    )
}

export default Home;


/* 
<div className="container" id="box-home">
                <Search guardaBusqueda={guardaBusqueda} buscarCod={BuscarProductoporCod} buscarNombre={BuscarProductoporNombre} buscarPrecios={BuscarProductoRangoPrecios} buscarStock={BuscarProductoRangoStock}/>
                <ModalUpdate show={showModal} onHide={onClose} producto={prdUpdate} cargarProductos={cargaProductos}/>
               <div>
                   {isFetch && <Cargando />}
                    {products.length > 0
                        ? <ProductColumn products={products} deletePrd={eliminaProducto} addCart={agregarCarrito} updatePrd={updatePrd}/>
                        : <Message tipo="alert alert-warning" mensaje="Sin productos"/>}
               </div>
            </div>
 */