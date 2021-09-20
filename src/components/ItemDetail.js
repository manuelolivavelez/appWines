import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const ItemDetail = ({ detail }) => {

    const { addItem } = useContext(CartContext);

    const [ newCount, setNewCount ] = useState(0)

    const onAdd = (count) => {

        console.log("contador", count);

        setNewCount(count);

        addItem({...detail, cantidad: newCount});

        console.log("productos agregados", detail);

    }

    return (

        <div className='card'>

            <img src={detail.imagen} className='card-img-top' alt={detail.nombre}/>
            
            <div className='card-body'>
            
                <h3 className='card-title'>{detail.nombre}</h3>
            
                <h4>$ {detail.precio}.-</h4>

                <h5>Variedad: {detail.variedad}</h5>

                <h5>Bodega: {detail.bodega}</h5>

                {newCount > 0 ? (
                    
                    <Link to={`/cart`}>
                        
                        <button>Terminar mi compra</button>
                    
                    </Link>

                ) : (

                    <ItemCount detail={detail} stock={detail.stock} initial={1} onAdd={onAdd}/>

                )}
            
            </div>
        
        </div>
    
    );

}

export default ItemDetail;