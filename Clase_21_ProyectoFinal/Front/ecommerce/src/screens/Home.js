import React,{useEffect,useState} from 'react'
import NavBar from '../components/NavBar';
import ProductColumn from '../components/ProductColumn';
import './styles/homeStyles.css'
import axios from 'axios';
import Message from '../components/Message';
import { useDispatch } from 'react-redux';
import {addItem} from '../store/action/cart.action'
import Search from '../components/Search';
import {cargarProductos} from '../api'


const Home = () =>{

    const nuevoProducto = {
        nombre: '',
        descripcion:'',
        codigo:'',
        precio: '',
        foto: '',
        stock:''
    }

    const dispatch = useDispatch()
    const [nuevoPrd,setNuevoPrd] = useState(nuevoProducto)    
    const [products,setProducts] = useState([])
    const [agregar,setAgregar] = useState(false)
    const [buscar,setBuscar] = useState('')

    const opcionAgregar = () =>{
        setAgregar(!agregar)
    }

    const eliminaProducto = (prdId) =>{
        console.log(prdId)
        axios.delete(`http://localhost:8080/productos/borrar/${prdId}`)
        .then((resultado)=>{
            console.log(resultado)
            cargaProductos()
        }).catch(err=>console.log(err))
    }

    const cargaProductos = async () =>{
        const data = await cargarProductos()
        const productos = []
          data.forEach(element=>{
               productos.push(element)
           })
           setProducts(productos)
    }

    const BuscarProducto =()=>{
        console.log(buscar)
        axios.get(`http://localhost:8080/productos/listar/${buscar}`)
             .then(resultado=>{
                const productos = []
                resultado.data.forEach(element=>{
                     productos.push(element)
                 })
                 setProducts(productos)
                 /* console.log(productos) */
             })
    }
    
    const guardaDatos = (campo,event) =>{
        setNuevoPrd({...nuevoPrd,[campo]:event.target.value})
    }

    const guardaBusqueda = (event) =>{
        setBuscar(event.target.value)
    }

    const agregaProducto = () =>{
        axios.post('http://localhost:8080/productos/agregar',{nuevoPrd})
          .then(function (response) {
            console.log(response);
            cargaProductos()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const agregarCarrito = (itemid) =>{
        console.log(itemid)
        axios.post(`http://localhost:8080/carrito/agregar/${itemid}`)
             .then(result=>{
                 console.log(result)
                 dispatch(addItem())
                 
             }).catch(err=>console.log(err))
    }


    useEffect(()=>{
        cargaProductos()
    },[])

    return(
        <body>
            <NavBar />
            <div className="container">
                <Search />
                {/* {agregar
                    ? <AddProduct guardaDatos={guardaDatos} agregaProducto={agregaProducto}/>
                    : <ListProduct guardaDatos={guardaBusqueda} buscarProducto={BuscarProducto} />} */}
               <div id="contenedor-productos">
                    {products.length > 0
                        ? <ProductColumn products={products} deletePrd={eliminaProducto} addCart={agregarCarrito}/>
                        : <Message tipo="alert alert-warning" mensaje="Sin productos"/>}
               </div>
            </div>
        </body>
    )
}

export default Home;