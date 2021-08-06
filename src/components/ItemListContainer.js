import React from 'react';
import ItemCount from './ItemCount';


const ItemListContainer = ({greeting}) => {
    
    return(
        <>
        <h1 className="home-welcome">{greeting}</h1>
        <ItemCount />
        </>
    )

}

export default ItemListContainer;
