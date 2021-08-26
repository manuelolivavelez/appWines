import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { drinks } from './drinks';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    let { id } = useParams();

    id = parseInt(id);

    useEffect(() => {

        new Promise((resolve, reject) => {

            setTimeout(() => resolve(drinks), 2000);

        })

        .then((dataResolve) => {

            const itemFound = dataResolve.find((item) => item.id === id);

            setProduct(itemFound);

        })

        .catch((error) => {

            console.log('error', error);

        })

    }, []);

    return (

        <div>
            
            <h2>Detalle del producto</h2>

            {Object.keys(product).length ? (

                <ItemDetail product={product} />
            
            ) : (
                
                <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt={"Loading..."} />

            )}

        </div>
    
    )

}

export default ItemDetailContainer;