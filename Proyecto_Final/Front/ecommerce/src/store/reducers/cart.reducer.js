import { ADDITEM, DLTITEM } from "../action/cart.action"

const array = []

const INITIAL_STATE = {
   carrito: [],
   total:0
}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case ADDITEM:
            console.log(state.carrito);
            let isFound = state.carrito.includes(action.payload)
            /* console.log(isFound); */
            if(isFound){
                if(action.payload.cantidad > 0){
                    let pos = state.carrito.indexOf(action.payload)
                    /* console.log(`Posicion encontrada ${pos}`);
                    console.log(`Nueva cantidad: ${action.payload.cantidad}`);
                    console.log(state.carrito[pos]); */
                    state.carrito[pos].cantidad += action.payload.cantidad
                    state.total += action.payload.precio
                }
                
            }else{
                state.carrito.push(action.payload)  
                state.total += action.payload.precio * action.payload.cantidad
            }
            return{
                ...state,
                carrito: state.carrito,
                total: state.total
            }
        case DLTITEM:
                let cantidad = action.payload.precio * action.payload.cantidad
                let nuevoTotal = state.total - cantidad
                state.total = nuevoTotal
                return{
                    ...state,
                    carrito: state.carrito.filter(prd => prd._id !== action.payload._id),
                    total: state.total
                }
        default:
            return state
    }
}