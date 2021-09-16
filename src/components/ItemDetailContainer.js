import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection , getDocs } from "firebase/firestore";
import { getData } from "../firebase";

import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [ products, setProducts ] = useState([]);

    let { id } = useParams();

    id = parseInt(id);

    useEffect(() => {

        const getProducts = async () => {

            const productCollection = collection(getData(), "products");
    
            const productSnapshot = await getDocs(productCollection);
    
            const productList = productSnapshot.docs.map(doc => doc.data());
    
            console.log("lista de productos" , productList);

            setProducts(productList);
    
        };
    
        getProducts();
    
    }, []);

    return (

        <div>
            
            <h2>Detalle del producto</h2>

            {Object.keys(products).length ? (

                <ItemDetail products={products} />
            
            ) : (
                
                <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt={"Loading..."} />

            )}

        </div>
    
    )

}

export default ItemDetailContainer;