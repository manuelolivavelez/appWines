const Item = ({ product }) => {

    return (

        <div className='card'>

            <img src={product.image} className='card-img-top' alt={product.title}/>
            
            <div className='card-body'>
            
                <h5 className='card-title'>{product.title}</h5>
            
                <h4>$ {product.price}</h4>
            
            </div>
        
        </div>
    
    );

};

export default Item;