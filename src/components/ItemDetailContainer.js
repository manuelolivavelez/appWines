import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { collection , getDocs , doc , getDoc } from "firebase/firestore";
import { getData } from "../firebase";

import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [ detail, setDetail ] = useState([]);

    let { id } = useParams();

    useEffect(() => {

        const getItem = async () => {

            const productReference = doc(getData(), "productos", id);

            const docSnapshot = await getDoc(productReference);

            if (docSnapshot.exists()) {

                console.log("Document data:", docSnapshot.data());

                console.log("Document ID:", docSnapshot.id);

                setDetail(docSnapshot.data());

            } else {

                console.log("No se encontro el documento.");

            }
        };

        getItem();

    }, []);

    return (

        <div>
            
            <h2>Detalle del producto</h2>

            {Object.keys(detail).length ? (

                <ItemDetail detail={detail} />
            
            ) : (
                
                <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"} alt={"Loading..."} />

            )}

        </div>
    
    )

}

export default ItemDetailContainer;