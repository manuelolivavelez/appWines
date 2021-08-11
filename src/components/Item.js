import React, { Fragment } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export const Item = ({ cadaProducto }) => {

    const onAdd = (count) => {
        console.log(count);
    }

    return(
        <div className="card">
            <img src={cadaProducto.pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{cadaProducto.title}</h5>
                <h4>$ {cadaProducto.price}</h4>
                <p className="card-text">{cadaProducto.description}</p>
                <ItemCount stock={6} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    );
};