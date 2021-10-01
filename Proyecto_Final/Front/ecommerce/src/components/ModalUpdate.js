import React,{useState,useEffect} from "react";
import {Modal} from 'react-bootstrap'
import { TextField,InputAdornment } from "@mui/material";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import './styles/mdlUpdate.css'
import {actualizarProducto} from '../api'
import Cargando from "./Cargando";

const ModalUpdate = ({show,onHide,producto,cargarProductos}) =>{

    const [prdUpd,setPrdUpd] = useState(null)
    const [isFetch,setIsFech] = useState(false)


    const guardarValores = (campo,value) =>{
        console.log(`${campo}: ${value}`);
        setPrdUpd({...prdUpd,[campo]:value})
    }

    const updProducto = async () =>{
        /* console.log(prdUpd); */
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
            nombre:producto.nombre,
            descripcion:producto.descripcion,
            precio:producto.precio,
            stock:producto.stock
        })
    }

    useEffect(()=>{
        console.log('se ejecuta el effect');
        clear()
    },[producto])

    return(
        <Modal show={show} onHide={()=>onHide()}>
            <Modal.Header>
                <h5>Actualizar Datos</h5>
            </Modal.Header>
            <Modal.Body>
                <div id="box-modal-upd">
                    <TextField
                        margin="normal" 
                        variant="filled"
                        label="Nombre"
                        defaultValue={producto.nombre}
                        onChange={(event)=>guardarValores('nombre',event.target.value)}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        margin="normal" 
                        variant="filled"
                        label="Descripcion"
                        defaultValue={producto.descripcion}
                        onChange={(event)=>guardarValores('descripcion',event.target.value)}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        margin="normal" 
                        variant="filled"
                        label="Precio"
                        type="number"
                        defaultValue={producto.precio}
                        onChange={(event)=>guardarValores('precio',event.target.value)}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        margin="normal" 
                        variant="filled"
                        label="Stock"
                        type="number"
                        defaultValue={producto.stock}
                        onChange={(event)=>guardarValores('stock',event.target.value)}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </InputAdornment>
                            )
                        }}
                    />
                    <div id="box-confirm-upd">
                        {isFetch&&<Cargando />}
                        <button className="btn btn-success" onClick={()=>updProducto()}>Actualizar</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalUpdate;

/* 
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
*/