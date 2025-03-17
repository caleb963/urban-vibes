import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className="header__logo">Urban Fashion</div>
            <nav className="header__nav">
                <a href="#products" className="header__link">Products</a>
                <a href="#about" className="header__link"></a>
                <a href="#contact" className="header__link">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;