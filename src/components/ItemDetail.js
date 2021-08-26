const ItemDetail = ({ product }) => {

    return (

        <div className='card'>

            <img src={product.image} className='card-img-top' alt={product.title}/>
            
            <div className='card-body'>
            
                <h3 className='card-title'>{product.title}</h3>
            
                <h4>$ {product.price}.-</h4>

                <h5>Variedad: {product.variety}</h5>

                <h5>Bodega: {product.cellar}</h5>
            
            </div>
        
        </div>
    
    );

}

export default ItemDetail;