import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";


const ItemList = ({ products }) => {

    return (

        <div>

            {products.map((product) => (

                <div>

                    <Link to={`/item-detail/${product.id}`}>
                        
                        <Item product={product} />
                    
                    </Link>
                
                </div>
            
            ))}
        
        </div>

    );

}

export default ItemList;