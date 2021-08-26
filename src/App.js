import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/Index.css";
import NavBar from './components/NavBar.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {

    return (

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
        
        </Switch>
    
    </BrowserRouter>
  
  );

}

export default App;
