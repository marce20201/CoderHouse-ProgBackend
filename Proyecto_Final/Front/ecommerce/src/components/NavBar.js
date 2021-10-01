import React from 'react'
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import CartLogo from "./CartLogo.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () =>{


    return(
        <nav className="navbar navbar-expand-lg" id="menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" id="btn-Icon"></span> */}
                    <FontAwesomeIcon icon={faBars} id="btn-menu"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"> 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link">Inicio</Link>
                        </li>
                    </ul>
                    <div id="box-btn-right">
                       <CartLogo />
                       <button className="btn btn-navbar" id="btn-regist">Registrarse</button>
                       <Link to={`/login`}> <button className="btn btn-navbar" id="btn-login">Iniciar Sesion</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}

export default NavBar;
