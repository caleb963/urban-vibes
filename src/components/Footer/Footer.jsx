import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <span className="footer__logo">Abissal Blessed</span>
                    <p className="footer__tagline">Attitude and Style</p>
                </div>

                <nav className="footer__nav">
                    <a href="#products" className="footer__link">Products</a>
                    <a href="#contact" className="footer__link">Contact</a>
                    <Link to="/cart" className="footer__link">Cart</Link>
                    <Link to="/login" className="footer__link">Login</Link>
                    <Link to="/register" className="footer__link">Register</Link>
                </nav>
            </div>

            <div className="footer__bottom">
                <p>&copy; {year} Abissal Blessed. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
