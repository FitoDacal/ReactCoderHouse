import { Link } from "react-router-dom"

export default function Item ({product}) {

    return (
        <div className="card text-center" style={{ width: "18rem", margin:10}}>
            <img src={product.img} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>${product.price}</p>
                <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary">Details</Link>
            </div>

        </div>
    )
}