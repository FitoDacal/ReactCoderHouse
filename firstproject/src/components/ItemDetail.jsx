import { Link } from "react-router-dom"

export default function ItemDetail({ name, img, description, category, price, stock }) {

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
                    <p>Price: $ {price}</p>
                    <p>Stock: {stock}</p>
                </div>
                <Link to="/cart" className="btn btn-primary" style={{ width: "18rem", marginBottom:16 }}>Add to cart</Link>

            </div>
        </div>
    )
}