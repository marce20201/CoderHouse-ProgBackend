import React,{useState} from 'react'
import {TextField,Button,IconButton} from '@mui/material'
import {} from '@mui/icons-material'
import NavBar from '../../components/NavBar'
import './publicar.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Cargando from '../../components/Cargando'
import { useHistory } from 'react-router'

const Publicar = () =>{
    const ProductoNuevo = {
        usuarioId:"",
        nombre:"",
        descripcion:"",
        precio:0,
        stock:0,
        imagen:"",
        categoria:""
    }

    const history = useHistory()
    const user = useSelector(state=>state.usr.usuario)
    const [producto,setProducto] = useState(ProductoNuevo)
    const [loading,setLoading] = useState(false)

    const guardarValores = (campo,event) =>{
        setProducto({...producto,[campo]:event.target.value})
    }

    const crearPublicacion = async () =>{
        setLoading(true)
        producto.usuarioId = user
        await axios.post('http://localhost:8080/api/productos',producto)
            .then(result=>{
                if(result.data.res){
                    setLoading(false)
                    history.push('/')
                }
            }).catch(err=>console.log(err))
    }

    const validaCampos = () =>{
        if(producto.nombre == "" || producto.descripcion == "" || producto.precio == 0 || producto.stock == 0 || producto.imagen == ""){
            //campos vacios
        }else{
            crearPublicacion()
        }
    }

    return(
        <>
            <NavBar />
            <div className="container">
                <div id="caja-publicar">
                    <div id="caja-form-pub">
                        <TextField 
                            fullWidth  
                            margin="dense" 
                            className="input" 
                            label="Nombre del Producto" 
                            variant="standard"
                            onChange={(value)=>guardarValores('nombre',value)}/>

                        <TextField 
                            fullWidth
                            margin="dense" 
                            multiline
                            rows={4}
                            label="Descripcion" 
                            variant="standard"
                            onChange={(value)=>guardarValores('descripcion',value)}/>

                        <TextField 
                            fullWidth 
                            type="number" 
                            margin="dense" 
                            label="Precio" 
                            variant="standard" 
                            onChange={(value)=>guardarValores('precio',value)}
                        />

                        <TextField 
                            fullWidth 
                            type="number" 
                            margin="dense" 
                            label="Stock" 
                            variant="standard" 
                            onChange={(value)=>guardarValores('stock',value)}
                        />

                        <TextField 
                            fullWidth 
                            margin="dense" 
                            label="Imagen" 
                            variant="standard" 
                            onChange={(value)=>guardarValores('imagen',value)}
                            />

                        <TextField 
                            fullWidth 
                            margin="dense" 
                            label="Categoria" 
                            variant="standard"
                            onChange={(value)=>guardarValores('categoria',value)} 
                            />

                        <div id="caja-btn-pub">
                            <Button id="btn-pub" onClick={validaCampos} variant="contained">Publicar</Button>
                        </div>
                    </div>
                </div>
                {loading && <Cargando /> }
            </div>
        </>
    )
}


export default Publicar;