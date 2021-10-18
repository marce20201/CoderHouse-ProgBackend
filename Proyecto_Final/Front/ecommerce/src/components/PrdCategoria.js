import React,{useState,useEffect} from 'react'
import {} from '@mui/material'
import {} from '@mui/icons-material'
import './styles/otrosStyles.css'
import axios from 'axios'
import ProductItem from './ProductItem'

const PrdCategoria = ({categoria,prdid}) =>{

    const [productos,setProductos] = useState([])

    const cargarProductosCategoria = async () =>{
        try {
             await axios.get(`http://localhost:8080/api/productos/categoria/${categoria}/${prdid}`)
                .then(res=>{
                   /*  console.log(res) */
                    setProductos(res.data)
                }).catch(err=>console.log(err))
        } catch (error) {
            
        }
    }



    useEffect(()=>{
        cargarProductosCategoria()
    },[categoria])

    return(
        <div className="container" id="box-categoria-prd">
            <h5>Otros productos de la misma categoria</h5>
            <div id="box-productos-categoria">
                {productos.map((data)=>{
                    return(
                        <ProductItem 
                            key={data.codigo}
                            data={data}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PrdCategoria;