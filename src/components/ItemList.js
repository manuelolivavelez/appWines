import Item from "./Item";


function ItemList({products}) {

    return(

        <div>
            {products.map((item) => (
                <Item {...item}/>
            ))}
        </div>

    );

}

export default ItemList;