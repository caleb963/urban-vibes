import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ContactForm from './components/ContactForm/ContactForm';
import Cart from './components/Cart/Cart';


function App() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) => 
        item.id === product.id
       ? { ...item, quantity: item.quantity + 1 }
       : item
      );
    }  

    return [...prevCart, { ...product, quantity: 1}];
   });
  };

  // Function to remove a product from the cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Products onAddToCart={handleAddToCart} />
      <Cart
       cartItems={cart}
       onRemove={handleRemoveFromCart}
       onClear={handleClearCart}
       />
      <ContactForm />
    </div>
  );
}

export default App;