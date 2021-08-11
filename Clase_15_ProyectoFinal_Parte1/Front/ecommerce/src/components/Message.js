import React from 'react'



const Message = ({tipo,mensaje}) =>{

    return(
        <div className={tipo} role="alert">
            {mensaje}
        </div>
    )
}

export default Message;