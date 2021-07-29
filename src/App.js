import "./css/Index.css"
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <section>
        <div className="home">
          <h1 className="home-welcome">Bienvenidos a AppWines.</h1>
        </div>
      </section>
      <footer>
        <div className="footer-copyright">©2021 Todos los derechos reservados | <a href="">Manuel Oliva Velez</a></div>
      </footer>
    </div>
  );
}

export default App;
