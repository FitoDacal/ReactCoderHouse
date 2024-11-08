import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Trossed</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">T-shirts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hoodies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pants</a>
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