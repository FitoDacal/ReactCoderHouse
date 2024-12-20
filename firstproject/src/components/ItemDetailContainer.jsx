import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const [error, setError] = useState(null);

    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, "products", productId))
            .then((querySnapshot) => {
                const prod = {id: querySnapshot.id, ...querySnapshot.data()};
                setProduct(prod);
                setError(null);
            })
            .catch(() => {
                setError("Error fetching product details. Please try again later.");
            })
    }, [productId])

    return (
        <div>
            <h2>Product details</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
}