import { Link } from "react-router-dom";

const CartWidget = ({ countCartItems }) => {
    
    return (

        <Link to={`/cart`} style={{ padding: "8px", margin: "20px"}}>
        
            🛒{''}
            
            {countCartItems ? (
            
                <button className="badge" style={{ backgroundColor: "red"}}>{countCartItems}</button>
            
            ) : (

                ''

            )}
        
        </Link>
    )

}

export default CartWidget;
