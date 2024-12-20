import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../services/firebase";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId ? 
        query(collection (db, "products"), where ("category", "==", categoryId)) :
        collection (db, "products")

        getDocs(collectionRef)

            .then((querySnapshot) =>  {
                const productos = querySnapshot.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                });
                setProducts(productos);
                setError(null);
            })

            .catch(() => {
                setError("Error fetching products. Please try again later.");
            })
    },[categoryId])

    return (
        <div className="d-flex flex-column">
            <h2 className="text-center">Welcome to trossed!</h2>
            {error ? (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    <ItemList products={products} />
                </div>
            )}
        </div>
    );
}