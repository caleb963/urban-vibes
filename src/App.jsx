import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import ContactForm from './components/ContactForm/ContactForm';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuth = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

    if (existing) {
      return prevCart.map((item) => 
        item.id === product.id
       ? { ...item, quantity: item.quantity + 1 } : item
      );
    }  

    return [...prevCart, { ...product, quantity: 1}];
   });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce(( sum, item) => sum + item.quantity, 0);

  return (
    <>
    <Header cartCount={cartCount} user={user}/>

      <Routes>
        <Route path="/" element={
          <>      
      <Hero />
      <Products onAddToCart={handleAddToCart} />
      <div id="contact">
        <ContactForm />
         </div>
        </>
        }
        />

        < Route path="/cart"
          element={
            <Cart
              cartItems={cart}
              onRemove={handleRemoveFromCart}
              onClear={handleClearCart}
              />
          }
         />
        
        <Route path="/login" element={<Login onAuth={handleAuth} />} />
        <Route path="/register" element={<Register onAuth={handleAuth} />} />
        </Routes>
        </>
  );
}

export default App;

