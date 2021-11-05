import React,{useEffect,useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './styles/navbar.css'
import CartLogo from "./CartLogo.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector , useDispatch} from 'react-redux';
import { logoutUser } from '../store/action/usuario.action';
import axios from 'axios'
import { IconButton,MenuItem,Menu } from '@mui/material';
import {FavoriteBorder,Home} from '@mui/icons-material'
import Favoritos from './Favoritos';
import MenuPub from './PublicarMenu/MenuPub';
import MenuUsuario from './MenuUsuario/MenuUsuario';

const NavBar = ({openCart}) =>{
    const history = useHistory()
    const dispatch = useDispatch()
    const usr = useSelector(state=>state.usr.token)
    const [modalFav,setModalFav] = useState(false)

    const cerrarCuenta = async () =>{
        try {
            await axios.get('http://localhost:8080/api/logout')
            .then(res=>{
                console.log(res)
                dispatch(logoutUser())
                history.push('/')
        
            }).catch(err=>console.log(err))
        } catch (error) {         
        }
    }

    const abrirCerrarFavoritos = () => setModalFav(!modalFav)

    useEffect(()=>{},[usr])

    return(
        <nav className="navbar navbar-expand-lg" id="menu">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand">E-commerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} id="btn-menu"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <IconButton onClick={()=>history.push('/')}><Home id="home-icon"/></IconButton>
                        </li>
                    </ul>
                    <div id="box-btn-right">

                       {usr && <MenuPub />}
                       <IconButton onClick={()=>abrirCerrarFavoritos()}><FavoriteBorder id="fav-icon" /></IconButton>
                       <CartLogo openCart={openCart} />
                      {usr  
                        ? <MenuUsuario />
                        : <div>
                            <Link to={'/registrarse'}><button className="btn btn-navbar" id="btn-regist">Registrarse</button></Link>
                            <Link to={`/login`}> <button className="btn btn-navbar" id="btn-login">Iniciar Sesion</button></Link> 
                        </div>}
                    </div>
                </div>
            </div>
        <Favoritos abrir={modalFav} cerrar={abrirCerrarFavoritos}  />
        </nav>
    ) 
}

export default NavBar;
