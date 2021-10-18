/* import logo from './logo.svg'; */
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from './screens/Login';
import Home from './screens/Home';
import Cart from './screens/Cart'
import AgregarProducto from './screens/AgregarProducto';
import Registrarse from './screens/Registrarse';
import VerProducto from './screens/VerProducto';

function App() {
  
  

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/agregar">
              <AgregarProducto />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registrarse" component={Registrarse}/>
            <Route path="/verproducto" component={VerProducto}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
