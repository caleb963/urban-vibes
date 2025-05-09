import React, { useEffect, useState } from 'react';
import './Products.css';
import AddProduct from './AddProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  return (
    <section className="products" id="products">
      <h2 className="products__title">Productos Destacados</h2>

      {/* Formulario para añadir productos */}
      <AddProduct onAdd={handleAddProduct} />

      <div className="products__list">
        {products.map(product => (
          <div key={product._id || product.id} className="products__item">
            <img src={product.image} alt={product.name} className="products__image" />
            <h3 className="products__name">{product.name}</h3>
            <p className="products__price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;