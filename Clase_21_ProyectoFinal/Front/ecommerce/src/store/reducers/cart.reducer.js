import { ADDITEM, DLTITEM } from "../action/cart.action"


const INITIAL_STATE = {
    contador:0
}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case ADDITEM:
            return{
                ...state,
                contador: state.contador += 1
            }
        case DLTITEM:
                return{
                    ...state,
                    contador: state.contador -= 1
                }
        default:
            return state
    }
}