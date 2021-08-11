/* import logo from './logo.svg'; */
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from './screens/Login';
import Home from './screens/Home';
import Cart from './screens/Cart'

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
        </Switch>
    </BrowserRouter>
  );
}

export default App;
