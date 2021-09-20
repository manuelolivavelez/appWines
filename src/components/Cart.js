import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";


const Cart = () => {

    const { cart , addItem , removeItem } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, products) => acc + products.cantidad * products.precio, 0);

    return (

        <aside className="block">
        
            <h2 style={{ paddingTop: "100px"}}>Carrito de compras</h2>
            
            <div>
            
                {cart.length === 0 && 
                
                <>

                    <div>Carrito vacío</div>
                
                    <Link to={`/`}>
                        
                        <button>Volver al listado de productos</button>
                    
                    </Link>

                </>
                
                }
            
                {cart.map((products) => (
                
                    <div key={products.id} className="row">
                
                        <div className="col-2">{products.nombre}</div>
                
                        <div className="col-2">
                        
                            <button onClick={() => removeItem(products)} className="remove">
                        
                            -
                        
                            </button>{' '}
                        
                            <button onClick={() => addItem(products)} className="add">
                            
                            +
                            
                            </button>
                        
                        </div>
        
                        <div className="col-2 text-right">
                    
                            {products.cantidad} x ${products.precio}
                    
                        </div>
                
                    </div>
            
                ))}
    
                {cart.length !== 0 && (
                
                    <>
                
                    <hr></hr>
        
                    <div className="row">
                        
                        <div className="col-2">
                        
                        <strong>Total</strong>
                        
                        </div>
                        
                        <div className="col-1 text-right">
                        
                        <strong>${totalPrice}</strong>
                        
                        </div>
                    
                    </div>
                    
                    <hr />
                    
                    <div className="row">
                        
                        <button onClick={() => alert('Implement Checkout!')}>
                        
                        Checkout
                        
                        </button>
                    
                    </div>
                    
                    </>
            
                )}
            
            </div>
      
        </aside>
    
    );
  
}

export default Cart;