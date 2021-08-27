import { useState } from 'react';

const ItemCount = ({ product, stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    function sumarCount() {

        if (count < stock){
        
            setCount(count + 1)
        
        }
    
    }

    function restarCount() {

        if (count > 0){

            setCount(count - 1)

        }

    }
    
    return(
    
        <div className='item-count'>
        
            <h1>Items: {count}</h1>
        
            <div className='buttons-count'>
        
                <button onClick={restarCount} className='buttons-count-minus btn btn-danger'>-</button>
        
                <button onClick={sumarCount} className='buttons-count-plus btn btn-primary'>+</button>
        
                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        
            </div>
        
        </div>

    )

}

export default ItemCount;