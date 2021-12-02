import {createStore,combineReducers,applyMiddleware} from 'redux'


//Reducers
import cartReducer from './reducers/cart.reducer'

const RootReducer = combineReducers({
    cart:cartReducer,
})

export default createStore(RootReducer,applyMiddleware())