import React,{useState} from "react";
import './styles/modaladdprd.css'
import {Modal} from 'react-bootstrap'
import AddProduct from './AddProduct'
import {agregarProducto} from '../api'

const ModalAddPrd = ({show,close,cargaPrd}) =>{

    const nuevoProducto = {
        nombre:"",
        descripcion:"",
        codigo:0,
        precio:0,
        stock:0,
        foto:""
    }
    const [prd,setPrd] = useState(nuevoProducto)

    const guardarDatos = (campo,event) =>{
        console.log(`${campo}: ${event.target.value}`)
        setPrd({...prd,[campo]:event.target.value});
    }

    const agregaProducto = async () =>{
        /* isLoading(true) */
        const data = await agregarProducto(prd)
        close()
        cargaPrd()
        /* isLoading(false) */
    }



    return(
        <Modal show={show} onHide={close}>
            <Modal.Header>
                <Modal.Title>Agregar un Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <AddProduct guardaDatos={guardarDatos} agregaProducto={agregaProducto} />
            </Modal.Body>

        </Modal>
    )
}

export default ModalAddPrd;