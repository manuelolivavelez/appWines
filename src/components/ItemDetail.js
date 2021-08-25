import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {

    const onAdd = (count) => {
        console.log(count);
    }

    return(
        <div>
            <h1>Detail</h1>
            <img src={props.image} />
            <div>
                <h4>{props.title}</h4>
                <h3>$ {props.price}</h3>
                <h5>Tipo de uva: {props.uva}</h5>
                <h5>Bodega: {props.bodega}</h5>
                <ItemCount stock={6} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    );

}

export default ItemDetail;