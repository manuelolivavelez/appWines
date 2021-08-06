import React, { useState } from 'react';

function ItemCount() {

    const [count, setCount] = useState(0);

    const stock = 20;

    function sumarCount() {
        if (count < stock){
            setCount(count + 1)
        }
    }

    function restarCount() {
        setCount(count - 1)
    }
    

    return(
        <div className='item-count'>
            <h1>Items: {count}</h1>
            <div className='buttons-count'>
                <button onClick={restarCount} className='buttons-count-minus btn btn-danger'>-</button>
                <button onClick={sumarCount} className='buttons-count-plus btn btn-primary'>+</button>
            </div>
        </div>

    )

}

export default ItemCount;