import React,{useState} from 'react'
import axios from 'axios'

const Modal = ({nameModal,tipo,data}) =>{

    const nuevoProducto = {
        nombre: '',
        precio:'',
        foto:''
    }
    const [nuevoPrd,setNuevoPrd] = useState(nuevoProducto)

    const guardarValores = (campo,valor) =>{
        setNuevoPrd({...nuevoPrd,[campo]:valor})
    }

    const actualizaDatos = () =>{
        axios.put(`http://localhost:8080/productos/actualizar/${data.id}`)
             .then((resultado)=>console.log(resultado))
             .catch(err=>console.log(err))

        
    }

    return(
        <div className="modal fade" id={nameModal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{tipo}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label for="nombre">Nombre</label>
                    <input name="nombre" className="form-control" value={data.nombre} disabled={true} />
                    <label for="precio">Precio</label>
                    <input name="precio" className="form-control" value={data.precio} disabled={true}/>
                    <label for="foto">URL foto</label>
                    <input name="foto" className="form-control" value={data.foto} disabled={true}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={()=>actualizaDatos()}>Actualizar</button>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Modal;