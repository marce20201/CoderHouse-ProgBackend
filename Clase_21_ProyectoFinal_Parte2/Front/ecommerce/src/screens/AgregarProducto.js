import React,{useState} from "react";
import './styles/addPrdstyles.css'
import NavBar from "../components/NavBar";
import AddProduct from "../components/AddProduct";
import {agregarProducto} from '../api'
import { Link } from 'react-router-dom';

const AgregarProducto = () =>{

    const nuevoProducto = {
        nombre: '',
        descripcion:'',
        codigo:'',
        precio: '',
        foto: '',
        stock:''
    }
    const [nuevoPrd,setNuevoPrd] = useState(nuevoProducto)  
    const [show,setShow] = useState(false)
    const [message,setMessage] = useState('')

    const onClose = () => setShow(!show)

    const guardaDatos = (campo,event) =>{
        setNuevoPrd({...nuevoPrd,[campo]:event.target.value})
    }

    
    const agregaProducto = async () =>{
          const data = await agregarProducto(nuevoPrd)
          console.log(`datos ${data}`);
          setMessage(data)
          setShow(true)
    }

    return(
        <div>
            <NavBar />
            <div className="container">
             
                <AddProduct guardaDatos={guardaDatos} agregaProducto={agregaProducto} />
            </div>
        </div>
    )
}


export default AgregarProducto;