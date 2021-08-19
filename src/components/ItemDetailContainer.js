import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer() {
    
    const [details, setDetail] = useState([]);

    const getItems = async () => {

        try {

            const response = await fetch(
                // Esta API no existe, es inventada
                "https://appwinesapi.com.ar/API/",
                {
                    method = "GET"
                }
            );

            const dataDetails = await response.json();

            setTimeout(() => resolve(dataDetails), 2000);

            setDetail(dataDetails.results);

        }catch (error) {

            console.log("Error")

        }

    };

    useEffect(() => {
        getItems();
    }, []);

    return(
        <div>
            {details.map((eachDetail) => (
                <ItemDetail eachDetail={eachDetail}/>
            ))}
        </div>
    )

}

export default ItemDetailContainer;