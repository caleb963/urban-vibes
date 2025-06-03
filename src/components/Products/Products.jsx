import React, { useState } from 'react';
import './Products.css';
import Hoodie1 from '../../assets/Hoodie1.jpeg';


const defaultProducts = [
  {
  id: 1,
  name: 'Streetwear Hoodie',
  price: '$45.00',
  image: Hoodie1,
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
    image: 'https://images.unsplash.com/photo-1618221647564-7ea73c11e10f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Graphic Socks',
    price: '$12.00',
    image: 'https://images.unsplash.com/photo-1611691548738-e79ce2b66bdf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Streetwear Cap',
    price:'22.00',
       image: 'https://images.unsplash.com/photo-1618354691372-bf991db92a7d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10, 
    name : 'Patterned Socks',
    price: "$12.00",
    image: 'https://images.unsplash.com/photo-1525904097878-94e7d73d0b1a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    name: 'Layered Chains',
    price: '$30.00',
    image: 'https://images.unsplash.com/photo-1618354691404-cb9a2aaf3e1c?auto=format&fit=crop&w=600&q=80',
  }, 
  {
   id: 12,
   name: 'Graffiti Hoodie',
   price: '$49.00',
   image: 'https://images.unsplash.com/photo-1618354691402-f1173935ae3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 13, 
    name: 'Tie-dye Shirt',
    price: '$27.00',
    image: 'https://images.unsplash.com/photo-1582727461474-9a1cb1036485?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 14,
    name: 'Minimalist Tote Bag',
    price: '$25.00',
    image: 'https://images.unsplash.com/photo-1588579239589-f8e1f48b9e38?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 15,
    name: 'Flannel Shirt',
    price: '$39.00',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e56?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 16,
    name: 'Street Utility Vest',
    price: '$70.00',
    image: 'https://images.unsplash.com/photo-1609220136736-66d89a7f8a94?auto=format&fit=crop&w=600&q=80',
  }
];

const Products = ({ onAddToCart }) => {
  const [products] = useState(defaultProducts);

  return (
    <section className="products" id="products">
      <h2 className="products__title">Productos Destacados</h2>
      <div className="products__list">
        {products.map(product => (
          <div key={product.id} className="products__item">
            <img src={product.image} alt={product.name} className="products__image" />
            <h3 className="products__name">{product.name}</h3>
            <p className="products__price">{product.price}</p>
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