import { createContext, useState } from "react";

const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (product) => {

        setCart([ ...cart, product ])

        console.log('carrito', cart);

    }

    return (
        <CartContext.Provider
            value={{ cart , addItem }}
        >
            { children }
        </CartContext.Provider>
    );

}

export default CartContext;