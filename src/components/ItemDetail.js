import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const ItemDetail = ({ product }) => {

    const { products, setProducts, cart, setCart } = useContext(CartContext);

    console.log('products y setProducts', {products, setProducts});

    console.log('cart',{cart});

    const [ newCount, setNewCount ] = useState(0)

    const onAdd = (count) => {

        setNewCount(count);

    }

    const endCart = () => {
        
        const newCart = [...cart];

        newCart.push(products[0]);

        setCart(newCart);

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
                        
                        <button onClick={endCart}>Terminar mi compra</button>
                    
                    </Link>

                ) : (

                    <ItemCount product={product} stock={6} initial={1} onAdd={onAdd}/>

                )}
            
            </div>
        
        </div>
    
    );

}

export default ItemDetail;