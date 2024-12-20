import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/">Trossed</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/category/t-shirts">T-shirts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/category/hoodies">Hoodies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/category/pants">Pants</Link>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} href="#">
                                <CartWidget cartCount={5} />
                            </a>
                        </li>
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}