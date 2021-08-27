import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useState } from "react";

const ItemDetail = ({ product }) => {

    const [ newCount, setNewCount ] = useState(0)

    const onAdd = (count) => {

        setNewCount(count);

    }

    return (

        <div className='card'>

            <img src={product.image} className='card-img-top' alt={product.title}/>
            
            <div className='card-body'>
            
                <h3 className='card-title'>{product.title}</h3>
            
                <h4>$ {product.price}.-</h4>

                <h5>Variedad: {product.variety}</h5>

                <h5>Bodega: {product.cellar}</h5>

                {newCount > 0 ? (
                    
                    <Link to={`/cart`}>
                        
                        <button>Terminar mi compra</button>
                    
                    </Link>

                ) : (

                    <ItemCount product={product} stock={6} initial={1} onAdd={onAdd}/>

                )}
            
            </div>
        
        </div>
    
    );

}

export default ItemDetail;