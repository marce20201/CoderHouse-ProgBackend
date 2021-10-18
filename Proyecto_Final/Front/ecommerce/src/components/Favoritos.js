import React,{useState,useEffect} from 'react'
import {Favorite,Delete} from '@mui/icons-material'
import {Modal,CircularProgress,Button,Divider} from '@mui/material'
import './styles/modalFav.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import sinFav from '../assets/sinfavorito.png'

const SinFavoritos = () =>{
    return(
        <div>
            <div id="box-sinFav">
                <img src={sinFav} id="img-sinFav"/>
            </div>
            <p id="text-sinFav">No tienes Favoritos</p>
        </div>
    )
}

const FavoritosList = ({list,cargaFavoritos}) =>{

    const eliminaFav = (id) =>{
        axios.delete(`http://localhost:8080/api/favorito/${id}`)
            .then(result=>{
                console.log(result)
                if(result.data.res) cargaFavoritos()
            }).catch(err=>console.log(err))
    }

    return(
        <div>
            {list.map((data)=>{
                return(
                    <div key={data._id} id="fav-body">
                       
                         <div id="fav-img-box">
                             <img src={data.imagen} id="fav-prd-img"/>
                         </div>   
                         <div id="fav-detalle">
                            <h5>{data.nombre}</h5>
                            <p>Vendido por {data.vendedor}</p>
                            <Button variant="outlined" id="btn-dlt-fav" onClick={()=>eliminaFav(data._id)} startIcon={<Delete/>}>Eliminar de mis favoritos</Button>
                         </div>
                    </div>
                )
            })}
        </div>
    )
}


const Favoritos = ({abrir,cerrar,usrid}) =>{

    const userId = useSelector(state=>state.usr.usuario)
    const [cargando,setCargando] = useState(false)
    const [favoritos,setFavoritos] = useState([])
    const [error,setError] = useState(false)

 
    const cargaFavoritos = async () =>{
        setCargando(true)
        setError(false)
        await axios.get(`http://localhost:8080/api/favorito/usr/${userId}`)
                .then(res=>{
                    /* console.log(res) */
                    if(res.data.length > 0){
                        setFavoritos(res.data)
                        setCargando(false)
                        setError(false)
                    }else{
                        setError(true)
                        setCargando(false)
                    }
                }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        cargaFavoritos()
    },[abrir])

    return(
        <Modal open={abrir} onClose={()=>cerrar()}>
            <div className="container" id="modal-fav">
                <div id="modal-body">
                   <div id="modal-title">
                        <Favorite id="modal-fav-icon"/>
                        <h3 id="modal-title-fav">Tus Favoritos</h3>
                   </div>
                   {cargando && <div id="modal-fav-loading">
                                    <CircularProgress />
                                </div>}

                    {error && <SinFavoritos />}
                    {favoritos && <FavoritosList list={favoritos} cargaFavoritos={cargaFavoritos}/>}
                </div>
            </div>
        </Modal>
    )
}

export default Favoritos;