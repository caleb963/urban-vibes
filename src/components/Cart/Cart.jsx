import React from 'react';
import './Cart.css';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);



const Cart = ({ cartItems, onRemove, onClear }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace('$', ''));
    return sum + priceNumber * item.quantity;
  }, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await axios.post('http://localhost:3000/api/stripe/create-checkout-session', {
        cartItems,
    });

    const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
    });

    if (result.error) {
        console.error(result.error.message);
    }
};

    return (
        <section className="cart">
            <h2 className="cart__title">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="cart-icon"
                    style={{ width: '1.5rem', height: '1.5rem', verticalAlign: 'middle', marginRight: '0.5rem'}}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .96.304 1.155.773L6.75 7.5h11.19c.892 0 1.446 1.02.944 1.786l-3.212 4.886a1.5 1.5 0 01-1.252.664H9.006a1.5 1.5 0 01-1.454-1.11L5.108 5.118A.75.75 0 004.386 4.5H2.25M6 21h.008v.008H6V21zm12 0h.008v.008H18V21z"                />
                </svg>
                Shopping Cart
            </h2>

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
                    <div className='cart__summary'>
                        <p><strong>total Items:</strong> {totalItems}</p>
                        <p><strong>Total to pay:</strong> ${totalPrice.toFixed(2)}</p>
                    </div>
                    
                    <button className="cart_clear" onClick={onClear}>Empty Cart</button>
                    <button className="cart_checkout" onClick={handleCheckout}>Pay with Stripe</button>
                </>
            )}
        </section>
    );
};

export default Cart;