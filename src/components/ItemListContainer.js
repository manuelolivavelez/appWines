import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
    
    return(
        <>
        <h1 className="home-welcome">{greeting}</h1>
        <ItemList />
        </>
    )

}

export default ItemListContainer;
