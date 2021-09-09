import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import "./css/Index.css";
import NavBar from './components/NavBar.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";




function App() {

    return (

        <CartProvider>

          <BrowserRouter>
            
            <NavBar />
            
            <Switch>

              <Route exact path="/">
              
                <ItemListContainer greeting={"Bienvenido!"} />
              
              </Route>
              
              <Route exact path="/category/:categoryId">
              
                <ItemListContainer />
              
              </Route>
              
              <Route exact path="/item-detail/:id">
              
                <ItemDetailContainer />
              
              </Route>

              <Route exact path="/cart">
              
                <Cart />
              
              </Route>
            
            </Switch>
        
        </BrowserRouter>

      </CartProvider>
  
  );

}

export default App;
