import { createContext, useState } from "react";
import { drinks } from "../components/drinks";

const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {

    const [ products, setProducts ] = useState(drinks);
    const [ cart, setCart ] = useState([]);

    return (
        <CartContext.Provider
            value={{ products, setProducts, cart, setCart }}
        >
            { children }
        </CartContext.Provider>
    );

}

export default CartContext;