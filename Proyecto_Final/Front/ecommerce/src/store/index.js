import {createStore,combineReducers,applyMiddleware} from 'redux'


//Reducers
import cartReducer from './reducers/cart.reducer'
import usuarioReducer from './reducers/usuario.reducer'


const RootReducer = combineReducers({
    cart:cartReducer,
    usr:usuarioReducer
})

export default createStore(RootReducer,applyMiddleware())