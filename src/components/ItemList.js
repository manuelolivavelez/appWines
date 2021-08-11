import { useEffect, useState } from "react";
import { Item } from "./Item";


function ItemList() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {

        new Promise((resolve, reject) => {

            const data = [
                {
                    id: "1",
                    title: "Perro Callejero",
                    description: "Malbec de Bodega Mosquita Muerta",
                    price: "500",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53085_default_big.jpeg"
                },
                {
                    id: "2",
                    title: "Clos de los Siete",
                    description: "Red Blend de Bodega Clos de los Siete",
                    price: "900",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52808_default_big.jpeg"
                },
                {
                    id: "3",
                    title: "Casa Boher",
                    description: "Malbec de Bodega Rosell Boher",
                    price: "750",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55353_default_big.jpeg"
                },
                {
                    id: "4",
                    title: "Nicasia Vineyards",
                    description: "Malbec de Bodega Catena Zapata",
                    price: "550",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52948_default_big.jpeg"
                },
                {
                    id: "5",
                    title: "Trumpeter",
                    description: "Malbec de Bodega Rutini Wines",
                    price: "700",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61963_default_big.jpeg"
                },
                {
                    id: "6",
                    title: "La Linda",
                    description: "Chardonnay de Bodega Luigi Bosca",
                    price: "650",
                    pictureUrl: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53045_default_big.jpeg"
                }
            ];

            setTimeout(() => resolve(data), 2000);

        })

        .then((dataResolve) => {

            setProducts(dataResolve);

        })

        .catch((error) => {

            console.log('error', error);

        });


    }, []);

    return(

        <div>
            {products.map((cadaProducto) => (
                <Item cadaProducto={cadaProducto}/>
            ))}
        </div>

    );

}

export default ItemList;