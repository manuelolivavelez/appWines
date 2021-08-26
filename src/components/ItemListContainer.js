import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from './ItemList';
import { drinks } from './drinks';


const ItemListContainer = (props) => {
    
    const [ products, setProducts ] = useState([]);

    let { categoryId } = useParams();

    categoryId = parseInt(categoryId);

    useEffect(() => {

        new Promise((resolve, reject) => {

            setTimeout(() => resolve(drinks), 2000);

        })

        .then((products) => {

            if (categoryId) {

                const filteredItems = products.filter((product) => product.categoryId === categoryId);

                setProducts(filteredItems);
            
            } else {

                setProducts(products);

            }

        })

        .catch((error) => {

            console.log('error', error);

        })

    }, [categoryId]);

    return (

        <div>

            <h2>{props.greeting}</h2>

            {drinks.length > 0 ? (

                <ItemList products={products} />

            ) : (

                <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt={"Loading..."} />
            
            )}

        </div>
    );
}

export default ItemListContainer;
