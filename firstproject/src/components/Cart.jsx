import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import CartItem from "./CartItem";


export default function Cart () {

    const {cart, clearCart, getTotal, totalQuantity} = useCart();

    const total = getTotal();

    if(totalQuantity === 0) {
        return (
            <div className="card text-center mx-auto m-5" style={{ width: "80%"}}>
                <h1>Cart</h1>
                <h3>The cart is empty</h3>
                <Link className="btn btn-primary m-2 mx-auto" to="/">Add products</Link>
            </div>
        )
    }

    return (
        <div className="card text-center mx-auto m-5" style={{ width: "80%"}}>
            <h1>Cart</h1>
            {cart.map((item) => (
                <CartItem key={item.id} {...item}/>
            ))}
            <h3 className="p-2">Total: ${total}</h3>
            <button className="btn btn-danger m-2 mx-auto" onClick={clearCart}>Clear cart</button>
            <Link className="btn btn-success m-2 mx-auto" to="/checkout">Purchase</Link>
        </div>
    )
}