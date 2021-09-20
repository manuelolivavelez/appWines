import { Link } from "react-router-dom";

import Item from "./Item";



const ItemList = ({ products }) => {

    return (

        <div>

            {products.map((product) => (

                <div>

                    <Link to={`/item-detail/${product.id}`}>
                        
                        <Item products={product} />
                    
                    </Link>
                
                </div>
            
            ))}
        
        </div>

    );

}

export default ItemList;