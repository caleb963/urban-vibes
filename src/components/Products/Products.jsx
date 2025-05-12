import React, { useState } from 'react';
import './Products.css';


const defaultProducts = [
  {
  id: 1,
  name: 'Streetwear Hoodie',
  price: '$45.00',
  image: 'https://images.unsplash.com/photo-1616531770192-60b5d65e57ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Urban Joggers',
    price: '$38.00',
    image: 'https://images.unsplash.com/photo-1618354691373-bd975f6b6e67?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Grafitti T-Shirt',
    price: '$29.00',
    image: 'https://images.unsplash.com/photo-1618354691153-6e1aa64e05a1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Oversized Denim Jacket',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1520974742444-94fbd7c52708?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Retro Sneakers',
    price: '$85.00',
    image: 'https://images.unsplash.com/photo-1602810313335-f4b56c7b4fdf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: '$42.00',
    image:'https://images.unsplash.com/photo-1552424493-16a1a1f13e85?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Urban Beanie',
    price: '$19.00',
  },
  {
    id: 8,
    name: 'Graphic Socks',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1611691548738-e79ce2b66bdf?auto=format&fit=crop&w=600&q=80',
  }
];

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