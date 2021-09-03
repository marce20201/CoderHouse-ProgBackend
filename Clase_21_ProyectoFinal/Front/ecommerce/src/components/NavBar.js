import React from 'react'
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import CartLogo from "./CartLogo.js";

const NavBar = () =>{


    return(
        <nav className="navbar navbar-expand-lg" id="menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="btn-Icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`} className="link-personalizado">Productos</Link>
                        </li>
                    </ul>
                    <div>
                        <CartLogo />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

{/* <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="btn-Icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`} className="link-personalizado">Productos</Link>
                        </li>
                    </ul>
                    <div>
                        <CartLogo />
                    </div>
                </div>
            </div> */}