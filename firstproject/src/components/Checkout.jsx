import { useState } from "react"
import { useCart } from "../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [loading, setLoading] = useState(false);

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal();

    const validateForm = () => {
        if (!name || !lastName || !phone || !address) {
            toast.warn("Please fill in all the fields.");
            return false;
        }
        return true;
    };

    const createOrder = async () => {
        if (!validateForm()) return;


        setLoading(true);
        toast.info("Generating your order, please wait...");
        try {
            const objOrder = {
                buyer: {
                    firstName: name,
                    lastName,
                    phone,
                    address,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date(),
            };

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            const outOfStock = [];

            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                toast.success(`Order created successfully! ID: ${orderAdded.id}`);
                clearCart();
            } else {
                toast.error("Some products are out of stock!");
            }
        } catch (error) {
            toast.error("An error occurred while creating your order. Please try again.");  
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-center">Checkout</h1>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} className="form-control"/>
            </div>
            <div>
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control"/>
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control"/>
            </div>
            <div>
                <label htmlFor="address" className="form-label">Address</label>
                <input onChange={(e) => setAddress(e.target.value)} value={address} className="form-control"/>
            </div>
            <div>
                {cart.map((item) => (
                    <article key={item.id}>
                        <header>
                            <h2 className="text-center m-5">
                                {item.name} (Quantity: {item.quantity})
                            </h2>
                        </header>
                    </article>
                ))}
            </div>
            <div className="d-flex justify-content-center p-3 ">
                <button onClick={createOrder} type="submit" className="btn btn-primary" disabled={loading}>{loading ? "Processing..." : "Finalize purchase order"}</button>
            </div>
        </div>
    );
}

{/* <form onSubmit={createOrder}>
    <div className="mb-3">
        <label htmlFor="exampleInputFullName1" className="form-label">Full name</label>
        <input type="text" className="form-control" id="exampleInputFullName1" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
        <input type="tel" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Finalize purchase order</button>
</form> */}