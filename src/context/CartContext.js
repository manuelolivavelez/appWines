import { createContext, useState } from "react";


const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (products) => {
        
        const exist = cart.find((item) => item.id === products.id);
        
        if (exist) {
            
            setCart(
                
                cart.map((item) =>
                
                item.id === products.id ? { ...exist, cantidad: exist.cantidad + 1 } : item
                
                )
            
            );
        
        } else {
          
            setCart([...cart, { ...products, cantidad: 1 }]);
        
        }
      
    };

    const removeItem = (products) => {

        const exist = cart.find((item) => item.id === products.id);

        if (exist.cantidad === 1) {

            setCart(cart.filter((item) => item.id !== products.id));

        } else {

            setCart(
                
                cart.map((item) => 
              
                item.id === products.id ? { ...exist, cantidad: exist.cantidad - 1 } : item
              
                )
            
            );
        
        }

    }

    console.log("carrito", cart);

    return (
        <CartContext.Provider
            value={{ cart , addItem , removeItem }}
        >
            { children }
        </CartContext.Provider>
    );

}

export default CartContext;