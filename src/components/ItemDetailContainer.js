import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer() {
    
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        new Promise((resolve, reject) => {

            const data = [
                {
                    id: "1",
                    title: "Perro Callejero",
                    uva: "Malbec",
                    bodega: "Mosquita Muerta",
                    price: "500",
                    image: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53085_default_big.jpeg"
                },
                {
                    id: "2",
                    title: "Clos de los Siete",
                    uva: "Red Blend",
                    bodega: "Clos de los Siete",
                    price: "900",
                    image: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52808_default_big.jpeg"
                },
                {
                    id: "3",
                    title: "Casa Boher",
                    uva: "Malbec",
                    bodega: "Rosell Boher",
                    price: "750",
                    image: "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55353_default_big.jpeg"
                },
                {
                    id: "4",
                    title: "Nicasia Vineyards",
                    uva: "Malbec",
                    bodega: "Catena Zapata",
                    price: "550",
                    image: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52948_default_big.jpeg"
                },
                {
                    id: "5",
                    title: "Trumpeter",
                    uva: "Malbec",
                    bodega: "Rutini Wines",
                    price: "700",
                    image: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61963_default_big.jpeg"
                },
                {
                    id: "6",
                    title: "La Linda",
                    uva: "Chardonnay",
                    bodega: "Luigi Bosca",
                    price: "650",
                    image: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53045_default_big.jpeg"
                }
            ];

            setLoading(true);

            setTimeout(() => resolve(data.filter((item) => item.id === id)), 2000);

        })

        .then((dataResolve) => {

            setProducts(dataResolve[0]);

        })

        .catch((error) => {

            console.log('error', error);

        })

        .finally(() => {
            setLoading(false);
        });


    }, []);

    return loading ? (

        <h1 className="home-welcome">Loading...</h1>

    ) : (

        <ItemDetail {...products}/>
    
    )

}

export default ItemDetailContainer;