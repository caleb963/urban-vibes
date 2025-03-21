import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Products />
      </main>
    </>
  );
}

export default App;