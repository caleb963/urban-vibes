import React from 'react';
import './Products.css';

const products = [
  {

    id: 1,
    name: 'Camiseta Grafitti',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1629994486790-b74b2bf3c1d2'
  },
  {
    id: 2,
    name: 'Sudadera Urbana',
    price: $45,
    image: 'https://images.unsplash.com/photo-1633432925650-03e236407d43'
  },
  {
    id: 3,
    name: 'Gorra callejera',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1622445462291-6f4b0983b77d'
  }
];

const Products = () => {
    return (
        <section className="products" id="products">
            <h2 className="products__title">Productos Destacados</h2>
            <div className="products__list">
                {products.map(product => (
                    <div key={product.id} className="products__item">
                        <img src={product.image} alt={product.name} className="products__image"/>
                        <h3 className="products__name">{product.name}</h3>
                        <p className="products__price">{product.price}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Products;

