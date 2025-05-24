import React from 'react';
import './Header.css';
import logo from '../../assets/abissal_logo.png'; // Assuming you have a logo image in the assets folder

const Header = ({ cartCount }) => {
    return (
        <header className='header'>
            <div className="header__left">
   <span className="header__brand">Abissal Blessed</span>             <img src={logo} alt="Abissal Blessed logo" className="header__logo-img" />
            </div>

            <nav className="header__nav">
                <a href="#products" className="header__link">Products</a>
                <a href="contact" className="header__link">Contact</a>

                <div className="cart-indicator">
                    🛒
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </nav>
        </header>
    );
};

export default Header;