import "./css/Index.css"
import NavBar from './components/NavBar.js';
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";


function App() {

  const greeting = 'Bienvenidos a App Wines.'

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <section>
        <div className="home">
          <ItemListContainer greeting={greeting} />
        </div>
      </section>
      <footer>
        <div className="footer-copyright">©2021 Todos los derechos reservados | <a href="#">Manuel Oliva Velez</a></div>
      </footer>
    </div>
  );
}

export default App;
