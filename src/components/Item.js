const Item = ({ products }) => {

    return (

        <div className='card'>

            <img src={products.image} className='card-img-top' alt={products.nombre}/>
            
            <div className='card-body'>
            
                <h5 className='card-title'>{products.nombre}</h5>
            
                <h4>$ {products.precio}</h4>
            
            </div>
        
        </div>
    
    );

};

export default Item;