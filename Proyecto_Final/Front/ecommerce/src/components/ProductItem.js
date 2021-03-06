import React,{useState,useEffect} from 'react'
import './styles/productItem.css'
import {Card,CardActionArea,CardContent,Divider,IconButton,styled} from '@mui/material'
import {Favorite,FavoriteBorder} from '@mui/icons-material'
import sinImagen from './camara.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/action/cart.action'
import { useHistory } from 'react-router'
import axios from 'axios'


const ProductItem = ({data,deletePrd,updatePrd,addCart}) =>{

    const history = useHistory()
    const usrId = useSelector(state=>state.usr.usuario)
    const [isFav,setIsFav] = useState(false)

    const añadirFavorito = async () =>{
        await axios.post(`http://localhost:8080/api/favorito`,{usuarioId: usrId,productoId: data._id})
            .then(result=>{
                if(result.data.res){
                    /* console.log(result) */
                    setIsFav(true)
                }else{
                    setIsFav(false)     
                }
            }).catch(err=>console.log(err))
    }

    const eliminaFavorito = async () =>{
        await axios.delete(`http://localhost:8080/api/favorito/usr/${usrId}/prd/${data._id}`)
              .then(result=>{
                  if(result.data.res) setIsFav(false)
              }).catch(err=>err)
    }

    const verProducto = () =>{
        history.push("/verproducto",{producto: data._id})
    }

    const verificaProductosconFav = async () =>{
        await axios.get(`http://localhost:8080/api/favorito/usr/${usrId}/prd/${data._id}`)
            .then(result=>{
                if(result.data.res){
                    setIsFav(true)
                }else{
                    setIsFav(false)
                }
            }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        verificaProductosconFav()
    },[usrId])


    return(
            <Card key={data.codigo} id="card-body">
                <div id="card-actions">
                    {isFav ? <IconButton onClick={()=>eliminaFavorito()}>
                                <Favorite id="card-fav"/>
                             </IconButton> 
                            : <IconButton onClick={()=>añadirFavorito()}>
                                <FavoriteBorder id="card-fav"/>
                              </IconButton>
                    }
                </div>
                 <CardActionArea id="card-action-area" onClick={()=>verProducto()}>
                    <div id="card-image-box">
                        <img src={data.imagen} id="card-image" />
                    </div>
                    <Divider />
                    <CardContent>
                        <h5 id="card-prd-nombre">{data.nombre}</h5>
                        <p id="card-precio">${data.precio}</p>
                        {data.stock > 0 ? <p className="card-stock">En Stock</p> : <p className="card-stock">Sin Stock</p>}
                        <p id="card-vendedor">Vendido por {data.vendedor}</p>
                    </CardContent>
                 </CardActionArea>
            </Card>
           
       
        
    )
}

export default ProductItem;

/* <div id="contenedor-img">
                        <img src={data.foto==''?sinImagen:data.foto} alt="..." id="img-product" />
                    </div> 
                    <div id="card-box-desc">
                        <div id="box-btn-top">
                            <h5 className="card-title" id="title-product">{data.nombre}</h5>
                            <FontAwesomeIcon icon={faTrashAlt} id="btn-delete" onClick={()=>deletePrd(data.codigo)} />
                        </div>
                        <hr style={{backgroundColor:'#D9D9D9'}}></hr>
                        <p id="descr-prd">{data.descripcion}</p>
                        <p id="precio-sty">${data.precio}</p>
                        <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
                        <div id="contenedor-btn">
                            
                            <button className="btn btn-options" id="btn-cart" onClick={()=>addCart(data)}>Agregar al Carrito</button>
                            <button type="button" className="btn btn-options" id="btn-update" onClick={()=>updatePrd(data)}>Actualizar</button>
                        </div>
                    </div> */


/*
<Modal nameModal="modalActualizar" tipo="Actualizar Datos" data={data} />

<div className="col">
              <div className="card">
                <p>Codigo: {data.stock}</p>
                <img src={data.foto==''?sinImagen:data.foto} className="card-img-top" alt="..." id="img-product" />
                 <div className="card-body">
                    <h5 className="card-title" id="title-product">{data.nombre}</h5>
                    <p>{data.descripcion}</p>
                    <p id="precio-sty">${data.precio}</p>
                    <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
                    <div id="contenedor-btn">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalActualizar">
                        Actualizar
                    </button>
                        <button className="btn btn-danger" onClick={()=>deletePrd(data.id)}>Eliminar</button>
                        <button className="btn btn-outline-primary" onClick={()=>addCart(data.id)}>Agregar al Carrito</button>
                    </div>
                 </div>
            </div>
            </div>



*/

/* 
<p id="prd-codigo">Codigo: {data.codigo}</p>
            <div className="contenedor-img">
                <img src={data.foto==''?sinImagen:data.foto} alt="..." id="img-product" />
            </div>
            <hr></hr>
            <h5 id="title-product">{data.nombre}</h5>
            <p id="descr-prd">{data.descripcion}</p>
            <p id="precio-sty">${data.precio}</p>
            <p id="stock-sty">{data.stock>0?'En Stock':'Sin Stock'}</p>
            <div id="contenedor-bnt">
                <button className="btn btn-danger" onClick={()=>deletePrd(data.codigo)}>Eliminar</button>
                <button className="btn btn-success" onClick={()=>updatePrd(data)}>Actualizar</button>
                 <button className="btn btn-outline-primary">Añadir al Carrito</button> 
                </div>
                 */