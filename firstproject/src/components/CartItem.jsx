import { useCart } from "../hooks/useCart"

export default function CartItem ({id, name, quantity, price}) {

    const {removeItem} = useCart()

    const handleRemove = (id) => {
        removeItem(id);
    }

    return (
        <div className="card-body p-4">
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price per unity: ${price}</p>
            <p>Total price: ${price * quantity}</p>
            <button className="btn btn-outline-danger" onClick={() => handleRemove(id)}>Remove Item</button>
        </div>
    )
}