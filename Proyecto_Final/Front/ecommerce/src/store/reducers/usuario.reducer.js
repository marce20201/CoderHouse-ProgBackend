import {LOGIN,LOGOUT} from '../action/usuario.action'

const INITIAL_STATE = {
    token:null,
    usuario:null
}

export default (state= INITIAL_STATE,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                token: action.token,
                usuario: action.user
            }

        case LOGOUT:
            return{
                ...state,
                token: null,
                usuario: null
            }

        default:
            return state
    }
}