import React from 'react';
import './Header.css';
import logo from '../../assets/abissal_logo.png';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className='header'>
            <div className="header__left">
            <img src={logo} alt="Abissal Blessed logo" className="header__logo-img" />
            </div>

            <nav className="header__nav">
                <a href="#products" className="header__link">Products</a>
                <a href="contact" className="header__link">Contact</a>

                <div className="cart-indicator" title="svg cart">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
    className="cart-icon">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .96.304 1.155.773L6.75 7.5h11.19c.892 0 1.446 1.02.944 1.786l-3.212 4.886a1.5 1.5 0 01-1.252.664H9.006a1.5 1.5 0 01-1.454-1.11L5.108 5.118A.75.75 0 004.386 4.5H2.25M6 21h.008v.008H6V21zm12 0h.008v.008H18V21z" />
  </svg>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </div>
            </nav>
        </header>
    );
};

export default Header;