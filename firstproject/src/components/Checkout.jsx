import { useState } from "react"
import { useCart } from "../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../services/firebase";

export default function Checkout() {
    const [orderCreated, setOrderCreated] = useState(false);

    const { cart, totalQuantity, getTotal, clearCart } = useCart();
    const total = getTotal(); // Total calculado
    const totalItems = totalQuantity(); // Llama a la función para obtener el valor

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    firstName: "Adolfo",
                    lastName: "Dacal",
                    phone: "34265345634",
                    address: "La Rioja",
                    email: "example@gmail.com",
                },
                items: cart,
                totalQuantity: totalItems, // Usa el valor calculado
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
                console.log(`El id de su orden es: ${orderAdded.id}`);
                setOrderCreated(true);
                clearCart();
            } else {
                console.log("Hay productos sin stock");
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (orderCreated) {
        return <h1>The order was created successfully</h1>;
    }

    return (
        <div>
            {/* <form onSubmit={createOrder}>
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName1" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputFullName1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Finalize purchase order</button>
            </form> */}
            <button onClick={createOrder} type="submit" className="btn btn-primary">
                Finalize purchase order
            </button>
        </div>
    );
}