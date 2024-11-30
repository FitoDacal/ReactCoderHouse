import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Trossed</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/t-shirts">T-shirts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/hoodies">Hoodies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/pants">Pants</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><CartWidget amount = {5}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}