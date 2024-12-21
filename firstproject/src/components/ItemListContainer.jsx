import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../services/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            })

            .catch(() => {
                toast.error("Error fetching products. Please try again later.");
                setLoading(false);
            })
    },[categoryId])

    return (
        <div className="d-flex flex-column">
            <h2 className="text-center p-3">Welcome to trossed!</h2>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <h3>Loading products...</h3>
                </div>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    <ItemList products={products} />
                </div>
            )}
        </div>
    )
}