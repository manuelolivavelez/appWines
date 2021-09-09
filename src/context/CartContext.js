import { createContext, useState } from "react";


const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (product) => {
        
        const exist = cart.find((item) => item.id === product.id);
        
        if (exist) {
            
            setCart(
                
                cart.map((item) =>
                
                item.id === product.id ? { ...exist, cantidad: exist.cantidad + 1 } : item
                
                )
            
            );
        
        } else {
          
            setCart([...cart, { ...product, cantidad: 1 }]);
        
        }
      
    };

    const removeItem = (product) => {

        const exist = cart.find((item) => item.id === product.id);

        if (exist.cantidad === 1) {

            setCart(cart.filter((item) => item.id !== product.id));

        } else {

            setCart(
                
                cart.map((item) => 
              
                item.id === product.id ? { ...exist, cantidad: exist.cantidad - 1 } : item
              
                )
            
            );
        
        }

    }

    return (
        <CartContext.Provider
            value={{ cart , addItem , removeItem }}
        >
            { children }
        </CartContext.Provider>
    );

}

export default CartContext;