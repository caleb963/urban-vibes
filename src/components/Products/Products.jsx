import React, { useState, useEffect } from 'react';
import api from '../../api.js';
import './Products.css';

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setError('Failed to load products.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="products" id="products">
      <h2 className="products__title">Productos Destacados</h2>
      <div className="products__list">
        {products.map(product => (
          <div key={product._id} className="products__item">
            <img src={product.image} alt={product.name} className="products__image" />
            <h3 className="products__name">{product.name}</h3>
            <p className="products__price">${product.price.toFixed(2)}</p>
            <button
              className="products__button"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;