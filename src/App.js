import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/Index.css"
import NavBar from './components/NavBar.js';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";


function App() {

  const greeting = 'Bienvenidos a App Wines.'

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item-list">
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
