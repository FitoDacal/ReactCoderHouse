import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useCart } from "../hooks/useCart"

export default function ItemDetail({ id, name, img, description, category, price, stock }) {

    const {addItem, isInCart} = useCart()

    const handleAdd = (count) => {
        const productToAdd = {
            id, name, price, quantity: count
        }

        addItem(productToAdd)
    }

    return (
        <div className="card text-center mx-auto" style={{ width: "80%"}}>
            <h2>{name}</h2>
            <div>
                <img
                    src={img}
                    style={{ width: 300 }}
                    className="card-img-top"
                    alt={name}
                />

                <div className="card-body">
                    <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                </div>
                {
                    isInCart(id) ? (
                        <Link to="/cart">Purchase</Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleAdd}/>
                    )
                }
            </div>
        </div>
    )
}