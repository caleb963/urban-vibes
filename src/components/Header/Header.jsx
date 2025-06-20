import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/abissal_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ cartCount }) => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };


    return (
        <header className='header'>
            <div className="header__left">
            <Link to="/">
            <img src={logo} alt="Abissal Blessed logo" className="header__logo-img" />
            </Link>
            </div>

            <nav className="header__nav">
                <Link to="#products" className="header__link">Products</Link>
                <Link to="#contact" className="header__link">Contact</Link>

                <div className="cart-indicator" title="svg cart">
                    <Link to="/cart" className="cart-link">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
    className="cart-icon">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .96.304 1.155.773L6.75 7.5h11.19c.892 0 1.446 1.02.944 1.786l-3.212 4.886a1.5 1.5 0 01-1.252.664H9.006a1.5 1.5 0 01-1.454-1.11L5.108 5.118A.75.75 0 004.386 4.5H2.25M6 21h.008v.008H6V21zm12 0h.008v.008H18V21z" />
  </svg>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </div>

            {!user ? (
                <>
                 <Link to="/login" className="header__link">Login</Link>
                 <Link to="/register" className="header_link">Register</Link>
                </>
            ) : (
                <>
                    <span className="header__user">Welcome, {user.name}</span>
                    <button className="header__logout" onClick={handleLogout}>Logout</button>
                </>
            )}
            </nav>
        </header>
    );
};

export default Header;