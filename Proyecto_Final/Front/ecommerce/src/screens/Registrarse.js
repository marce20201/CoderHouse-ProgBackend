import React,{useState} from 'react'
import {} from '@mui/material'
import './styles/registerStyles.css'
import NavBar from '../components/NavBar'
import { TextField, Button,Backdrop,CircularProgress } from '@mui/material'
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import Message from '../components/Message'
import axios from 'axios'
import { loginUser } from '../store/action/usuario.action'
import { useDispatch } from 'react-redux'


const Registrarse = () =>{

    const datosUsuario = {
        nombre:"",
        email:"",
        contraseña:"",
        repitecontraseña:"",
    }

    const [userLogged,setUserLogged] = useState({
        email:"",
        contraseña:""
    })

    const dispatch = useDispatch()
    const history = useHistory()
    const [nuevoUsuario,setNuevoUsuario] = useState(datosUsuario)
    const [error,setError] = useState(null)
    const [disabled,setDisabled] = useState(false)
    const [backdrop,setBackdrop] = useState(false)
    const [clave,setClave] = useState(null)
    const [verificado,setVerificado] = useState(false)
    const [msgVerificado,setMsgVerificado] = useState(null)
    const [mostrar,setMostrar] = useState(false)
    const [tipoMsg,setTipoMsg] = useState(null)
    const [mostrarVerif,setMostrarVerif] = useState(false)
    const [conSMS,setConSMS] = useState(false)
    const [celular,setCelular] = useState(null)

    const guardarValores = (campo,valor)=>{
        setNuevoUsuario({...nuevoUsuario,[campo]:valor})
    }

    const validaContraseñas = () =>{
        if(nuevoUsuario.contraseña != nuevoUsuario.repitecontraseña){
            setError('Las contraseñas no coinciden')
            setDisabled(true)
        }
        else{
            setError(null)
            setDisabled(false)
        }
    }


    const verificaEmail = async ()=>{
        setBackdrop(true)
        await axios.post(`http://localhost:8080/api/email`,{email: nuevoUsuario.email})
            .then(result=>{
                if(result.data.res){
                    alert(result.data.msg)
                    setBackdrop(false)
                    setMostrar(true)
                    setMsgVerificado('Ingrese la clave enviada al mail indicado')
                }
            }).catch(err=>console.log(err))
    }



    const verificaSMS = async () =>{
        setBackdrop(true)
        await axios.post(`http://localhost:8080/api/message`,{phone: celular})
            .then(result=>{
                if(result.data.res){
                    alert(result.data.msg)
                    setBackdrop(false)
                    setMostrar(true)
                    setMsgVerificado('Ingrese la clave enviada')
                }
            }).catch(err=>console.log(err))
    }

    const verificaClave = async () =>{
        await axios.get(`http://localhost:8080/api/email/verificacion/${clave}`)
            .then(result=>{
                console.log(result)
                if(result.data.res){
                    setTipoMsg('success')
                    setVerificado(true)
                    setMsgVerificado(result.data.msg)
                    crearUsuario()
                }else{
                    setTipoMsg('warning')
                    setVerificado(false)
                    setMsgVerificado(result.data.msg)
                }
            }).catch(err=>console.log(err))
    }

    const crearUsuario = async () =>{
        setBackdrop(true)
        await axios.post('http://localhost:8080/api/register',{nombre:nuevoUsuario.nombre,email:nuevoUsuario.email,contraseña:nuevoUsuario.contraseña})
            .then(res=>{
                    if(res.data.res){
                        userLogged.email = res.data.email
                        userLogged.contraseña = res.data.contraseña
                        console.log(`usuario: ${userLogged.email} ${userLogged.contraseña}`)
                        iniciaSesion()
                    }else{
                        setBackdrop(false)
                        setError(res.data.message)
                    }
                       
            }).catch(err=>console.log(err))
    }

    const iniciaSesion = async () =>{
        let email = userLogged.email
        let password = userLogged.contraseña
        await axios.post('http://localhost:8080/api/login',{email,password})
            .then(res=>{
                console.log(res)
                if(res.data.token){
                    setError(null)
                    dispatch(loginUser(res.data.token,res.data.usuario))
                    setBackdrop(false)
                    history.push('/')
                }else{
                    setBackdrop(false)
                    setError(res.data)
                }
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <NavBar />
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={backdrop} /* onClick={handleClose} */>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="container" id="box-registrarse">
                <div id="box-form-registrarse">
                     <h3 id="box-form-title">Registrarse</h3>
                     <TextField margin="dense" label="Nombre Completo" onChange={(event)=>guardarValores('nombre',event.target.value)} variant="filled" />
                     <TextField margin="dense" label="Email" onChange={(event)=>guardarValores('email',event.target.value)} variant="filled" />
                     <TextField margin="dense" label="Contraseña" type="password" onChange={(event)=>guardarValores('contraseña',event.target.value)}      onBlur={()=>validaContraseñas()} variant="filled" />
                     <TextField margin="dense" label="Repetir Contraseña" type="password" onChange={(event)=>guardarValores('repitecontraseña',event.target.value)} onBlur={()=>validaContraseñas()} variant="filled" /> 
                    <div id="box-from-btn">
                        <Button id = "btn-regist-crear" variant="contained" disabled={disabled} onClick={()=>setMostrarVerif(!mostrarVerif)}>Crear Cuenta</Button>
                        <Link id="link-login" to="/login"><Button id = "btn-regist-login" variant="outlined">Ya tienes una cuenta? Inicia sesion aqui</Button></Link>
                    </div>
                    {error && <Message tipo="alert alert-warning" mensaje={error}/>}
                    {mostrarVerif && <div id="verificacion-box">
                                        <div id="verificacion-btn">
                                                <h5>Debemos verificar tu identidad</h5>
                                                <Button id="class-btn" variant="outlined" onClick={()=>verificaEmail()} >Verificar con Email</Button>
                                                <Button id="class-btn" variant="outlined" onClick={()=>setConSMS(!conSMS)}>Verificar con SMS</Button>
                                                {conSMS && <div>
                                                               <TextField variant="filled" onChange={(event)=>setCelular(event.target.value)} margin="dense" label="Celular..." helperText="Ingresa tu celular, Ej: +541150019396" onBlur={()=>verificaSMS()}/> 
                                                            </div>
                                                }

                                        </div>
                                    </div>}
                    {mostrar && <div id="verifica-email">
                        <TextField margin="dense" label="Clave..." onChange={(event)=>setClave(event.target.value)} variant="standard" color={tipoMsg} focused={verificado} helperText={msgVerificado} onBlur={()=>verificaClave()}  />
                    </div>}

                </div>
            </div>
        </div>
    )
}


export default Registrarse;