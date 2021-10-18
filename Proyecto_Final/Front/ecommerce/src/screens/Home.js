import React,{useEffect,useState} from 'react'
import NavBar from '../components/NavBar';
import ProductColumn from '../components/ProductColumn';
import './styles/homeStyles.css'
import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom'
import {Snackbar,Alert} from '@mui/material'
import axios from 'axios';
const Home = () =>{

    const location = useLocation()
    const [open, setOpen] = useState(false);
    const [msg,setMsg] = useState(null)
    const user = useSelector(state=>state.usr.usuario)
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const estaLogueado = () =>{
        if(user){
           axios.get(`http://localhost:8080/api/usr/${user}`)
                .then(result=>{
                    /* console.log(result) */
                    if(result.data.res){
                        setMsg(`Bienvenido ${result.data.data.nombre}!`)
                        setOpen(true)
                    }
                }).catch(err=>console.log(err))
        }
    }
    

    useEffect(()=>{
        estaLogueado()
    },[user])

    return(
        <div>
           
            <NavBar />
            {user && <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}  open={open} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {msg}
                        </Alert>
                    </Snackbar>
            }
            <ProductColumn />
        </div>
    )
}

export default Home;

