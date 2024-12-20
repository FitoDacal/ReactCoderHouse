import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import CartItem from "./CartItem";


export default function Cart () {

    const {cart, clearCart, getTotal, totalQuantity} = useCart();

    const total = getTotal();

    if(totalQuantity === 0) {
        return <h1>The cart is empty</h1>
    }

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item) => (
                <CartItem key={item.id} {...item}/>
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart}>Clear cart</button>
            <Link to="/checkout">Purchase</Link>
        </div>
    )
}