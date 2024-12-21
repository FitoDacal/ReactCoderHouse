import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, "products", productId))
            .then((querySnapshot) => {
                if (querySnapshot.exists()) {
                    const prod = { id: querySnapshot.id, ...querySnapshot.data() };
                    setProduct(prod);
                } else {
                    toast.error("Product not found.");
                }
                setLoading(false);
            })
            .catch(() => {
                toast.error("Error fetching product details. Please try again later.");
                setLoading(false);
            });
    }, [productId]);

    return (
        <div>
            <h2 className="text-center p-3">PRODUCT DETAILS</h2>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="ms-3">Loading...</p>
                </div>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
}