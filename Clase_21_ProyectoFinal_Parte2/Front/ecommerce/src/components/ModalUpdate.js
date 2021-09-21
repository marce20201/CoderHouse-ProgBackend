import React,{useState,useEffect} from "react";
import {Modal} from 'react-bootstrap'
import './styles/mdlUpdate.css'
import {actualizarProducto} from '../api'
import Cargando from "./Cargando";

const ModalUpdate = ({show,onHide,producto,cargarProductos}) =>{

    const [prdUpd,setPrdUpd] = useState({
        codigo: producto.codigo,
        nombre:'',
        descripcion:'',
        precio:'',
        stock:'',
    })
    const [isFetch,setIsFech] = useState(false)


    const guardarValores = (campo,value) =>{
        setPrdUpd({...prdUpd,[campo]:value})
    }

    const updProducto = async () =>{
        setIsFech(true)
        const respuesta = await actualizarProducto(prdUpd)
        setIsFech(false)   
        onHide()
        cargarProductos()     
    }

    const validaciones = () =>{
        if(prdUpd.nombre == '' || prdUpd.descripcion == '' || prdUpd.precio == '' || prdUpd.stock == ''){
            alert('No actualizaste ningun valor')
        }else{
            updProducto()
        }
    }

    const clear = () =>{
        setPrdUpd({
            codigo:producto.codigo,
            nombre:'',
            descripcion:'',
            precio:'',
            stock:''
        })
    }

    useEffect(()=>{
        clear()
    },[producto])

    return(
        <Modal show={show} onHide={()=>onHide()}>
            <Modal.Header>
                <h5>Actualizar Datos</h5>
            </Modal.Header>
            <Modal.Body>
                <p>{producto.codigo}</p>
                <label for="nombre">Actualizar Nombre</label>
                <input name="nombre" type="text" className="form-control" defaultValue={producto.nombre}  onChange={(event)=>guardarValores('nombre',event.target.value)}/>

                <label for="descripcion">Actualizar descripcion</label>
                <textarea name="descripcion" className="form-control" typeof="text" defaultValue={producto.descripcion} onChange={(event)=>guardarValores('descripcion',event.target.value)}/>


                <label for="precio">Actualizar Precio</label>
                <input name="precio" type="number" className="form-control" defaultValue={producto.precio} onChange={(event)=>guardarValores('precio',event.target.value)}/>

                <label for="stock">Actualizar Stock</label>
                <input name="stock" type="number" className="form-control" defaultValue={producto.stock} onChange={(event)=>guardarValores('stock',event.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                {isFetch&&<Cargando />}
                <button className="btn btn-success" onClick={()=>validaciones()}>Actualizar</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdate;