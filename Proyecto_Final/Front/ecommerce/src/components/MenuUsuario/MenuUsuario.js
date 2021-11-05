import React,{useState} from "react";
import {AccountCircle,Logout,Person} from '@mui/icons-material'
import {IconButton,Menu,MenuItem,Button,ListItemIcon} from '@mui/material'
import './menuUsr.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/action/usuario.action";
import { useHistory } from "react-router";

const MenuUsuario = () =>{

    const history = useHistory()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    

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

    return(
        <>
            <IconButton onClick={handleClick}>
                <AccountCircle id="account-icon" />
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
             >
                 <MenuItem onClick={handleClose}>
                  <ListItemIcon><Person/></ListItemIcon>  
                    Mis Datos
                </MenuItem>

                <MenuItem onClick={cerrarCuenta}>
                  <ListItemIcon><Logout/></ListItemIcon>  
                    Salir de la sesion
                </MenuItem>
            </Menu>
        </>
    )
}


export default MenuUsuario;