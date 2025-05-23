import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemove, onClear }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>The cart is empty.</p>
            ) : (
                <>
                    <ul className="cart__list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart__item">
                                <img src={item.image} alt={item.name} className="cart__image" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.quantity} x ${item.price}</p>
                                </div>
                                <button className="cart__remove" onClick={() => onRemove(item.id)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__total">Total: ${total.toFixed(2)}</p>
                    <button className="cart_clear" onClick={onClear}>Empty Cart</button>
                </>
            )}
        </section>
    );
};

export default Cart;