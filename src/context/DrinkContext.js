import { createContext, useState } from "react";
import drinks from "../components/drinks";
 
const DrinkContext = createContext ([]);

export const DrinkProvider = ({ children }) => {

    const [ userDrinks, setUserDrinks ] = useState(drinks);

    return (
        <DrinkContext.Provider
            value={{ userDrinks , setUserDrinks }}
        >
            { children }
        </DrinkContext.Provider>
    );

}

export default DrinkContext;