import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item(props) {

    const onAdd = (count) => {
        console.log(count);
    }

    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h4>$ {props.price}</h4>
                <ItemCount stock={6} initial={1} onAdd={onAdd}/>
                <Link to={`/item-detail/${props.id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;