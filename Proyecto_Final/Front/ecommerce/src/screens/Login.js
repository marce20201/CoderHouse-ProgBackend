import React from 'react'
import './styles/loginstyles.css'
import NavBar from '../components/NavBar'
import { TextField, Button, Divider } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () =>{

    

    return(
        <div>
            <NavBar />
            <div className="container" id="box-login">
                <div id="box-form">
                    <h2 id="login-title">Iniciar Sesion</h2>
                    <TextField margin="dense"  label="Email" variant="filled" />
                    <TextField margin="dense"  label="Contraseña" variant="filled" />
                    <div id="box-btn-primary">
                        <div id="box-btn-secundary">
                            <Button id="btn-login-form" variant="contained" endIcon={<FontAwesomeIcon icon={faSignInAlt} color="#FFFFFF"/>}>Iniciar Sesion</Button>
                            <Button id="btn-signup-form" variant="outlined">Registrarse</Button>
                        </div>
                    </div>
                    <div id="box-inicio-alterno">
                        <Divider>O iniciar con</Divider>
                        <div id="box-otros">
                            <Button id="btn-facebook-form" variant="contained" startIcon={<FacebookIcon color="#FFFFFF"/>}>Iniciar Sesion con Facebook</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;