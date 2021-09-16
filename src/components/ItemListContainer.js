import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection , getDocs } from "firebase/firestore";
import { getData } from "../firebase";

import ItemList from './ItemList';
import { drinks } from './drinks';


const ItemListContainer = () => {
    
    const [ products, setProducts ] = useState([]);

    let { categoria } = useParams();

    categoria = parseInt(categoria);

    useEffect(() => {

        const getProducts = async () => {

            console.log("1");

            const productCollection = collection(getData(), "products");
    
            const productSnapshot = await getDocs(productCollection);
    
            const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    
            console.log("lista de productos" , productList);

            if (categoria) {

                const filteredItems = productList.filter((product) => product.categoria === categoria);

                setProducts(filteredItems);
            
            } else {

                setProducts(productList);

            }
    
        };
    
        getProducts();
    
    }, [categoria]);

    return (

        <div>

            {products.length > 0 ? (

                <ItemList products={products} />

            ) : (

                <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt={"Loading..."} />
            
            )}

        </div>
    );
}

export default ItemListContainer;
