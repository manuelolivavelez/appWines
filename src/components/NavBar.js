import { Link } from "react-router-dom";
import { useContext } from "react";

import CartWidget from "./CartWidget";
import CartContext from "../context/CartContext";


const NavBar = () => {

    const { cart } = useContext(CartContext);

    return (
        
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
        
                            <Link to ="/category/1" className="nav-link">Vinos Tintos</Link>
        
                        </li>
        
                        <li className="nav-item">
        
                            <Link to="/category/2" className="nav-link">Vinos Blancos</Link>
        
                        </li>
        
                        <li className="nav-item">
        
                            <Link to="/category/3" className="nav-link">Espumantes</Link>
        
                        </li>
        
                        <li className="nav-item">
        
                            <CartWidget countCartItems={cart.length} />
        
                        </li>
        
                    </ul>
        
                </div>
        
            </div>
        
        </nav>
        
        </>
    
    );

}

export default NavBar;