import React from 'react';

function ItemDetail({ eachDetail }) {

    return(
        <div>
            <img src={eachDetail.picture} />
            <div>
                <h5>{eachDetail.title}</h5>
                <h4>$ {eachDetail.price}</h4>
                <p>{eachDetail.description}</p>
            </div>
        </div>
    );

}

export default ItemDetail;