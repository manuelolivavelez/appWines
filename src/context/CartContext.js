import { createContext, useState } from "react";


const checkItemQty = ( list , product ) => {

    const drinkFound = list.find(drink => drink.id === product.id);

    if (drinkFound) {

        drinkFound.cantidad++;

    } else {

        list.push({ ...product , count: 1 });

    }

    return list;

}

const CartContext = createContext ([]);

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (product) => {

        const cartDraft = [ ...cart ];

        cartDraft.push(product);

        const cleanCart = checkItemQty( cartDraft , product );

        setCart(cartDraft);

        console.log('carrito', cartDraft);

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