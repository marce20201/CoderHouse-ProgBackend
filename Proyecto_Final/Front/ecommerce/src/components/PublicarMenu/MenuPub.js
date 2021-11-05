import React,{useState} from "react";
import {Menu,MenuItem,Button} from '@mui/material'
import {} from '@mui/icons-material'
import './menuPub.css'
import { useHistory } from "react-router";


const MenuPub = () =>{

/*     const [open,setOpen] = useState(false)
 */
    /* const abrirCerrar = () => setOpen(!open) */

    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const publicarProducto = () =>{
        history.push('/publicar')
    }

    return(
        <>
            <Button 
                id="btn-prd-opc" 
                variant="text"
                onClick={handleClick}>Productos</Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
             >
                <MenuItem onClick={publicarProducto}>Publicar</MenuItem>
                <MenuItem onClick={handleClose}>Mis Productos</MenuItem>
            </Menu>
        </>
    )
}

export default MenuPub;