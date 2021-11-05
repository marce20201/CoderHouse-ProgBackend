import React,{useState} from 'react'
import './styles/loginstyles.css'
import NavBar from '../components/NavBar'
import { TextField, Button, Divider,Backdrop,CircularProgress } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Message from '../components/Message'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/action/usuario.action';


const Login = () =>{

    const dispatch = useDispatch()
    const [error,setError] = useState(null)
    const history = useHistory()
    const [usr,setUsr] = useState({email:"",password:""})
    const [backdrop,setBackdrop] = useState(false)
    
    const guardaValores = (campo,event)=>{
        setUsr({...usr,[campo]:event.target.value})
    }

    const iniciarSesion = async (email,password) =>{
        setBackdrop(true)
        await axios.post('http://localhost:8080/api/login',{email,password})
            .then(result=>{
                console.log(result)
                if(result.data.res){
                    setError(null)
                    dispatch(loginUser(result.data.token,result.data.usuario))
                    setBackdrop(false)
                    history.push("/",{login: true})
                }else{
                    setError(result.data.message)
                    setBackdrop(false)
                }
            }).catch(err=>console.log(err))
    }

   /*  const iniciarSesionFB = async () =>{
        await axios.get('http://localhost:8080/api/auth/facebook')
            .then(result=>{
                console.log(result)
            }).catch(err=>console.log(err))
    } */

    return(
        <div>
            <NavBar />

            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop} /* onClick={handleClose} */>
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="container" id="box-login">
                <div id="box-form">
                    <h2 id="login-title">Iniciar Sesion</h2>
                    <TextField margin="dense" id="email" label="Email" onChange={(value)=>guardaValores('email',value)} variant="filled" />
                    <TextField margin="dense" id="password" label="Contraseña" type="password" onChange={(value)=>guardaValores('password',value)} variant="filled" />
                    <div id="box-btn-primary">
                        <div id="box-btn-secundary">
                            <Button 
                                id="btn-login-form" 
                                variant="contained"
                                onClick={()=>iniciarSesion(usr.email,usr.password)} 
                                endIcon={<FontAwesomeIcon icon={faSignInAlt} color="#FFFFFF"/>}>Iniciar Sesion</Button>

                            <Button id="btn-signup-form" variant="outlined" onClick={()=>history.push('/registrarse')}>Registrarse</Button>
                        </div>
                    </div>
                    {/* <div id="box-inicio-alterno">
                        <Divider>O iniciar con</Divider>
                        <div id="box-otros">
                            <Button id="btn-facebook-form" variant="contained" onClick={()=>iniciarSesionFB()} startIcon={<FacebookIcon color="#FFFFFF"/>}>Iniciar Sesion con Facebook</Button>
                        </div>
                    </div> */}
                    {error && <Message tipo="alert alert-warning" mensaje={error} />}
                </div>
            </div>
        </div>
    )
}

export default Login;