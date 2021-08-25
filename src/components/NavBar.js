import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand navbar-brand_font">App Wines</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to ="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/item-list" className="nav-link">Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/carrito" className="nav-link"><CartWidget/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;