import { useParams } from "react-router-dom";
import { getProductByID } from "../asynmook";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductByID(Number(productId))
            .then((resp) => {
                setProduct(resp)
            })
    }, [productId])

    return (
        <div>
            <h2>Detalle del producto</h2>
            <ItemDetail {...product} />
        </div>
    );
}