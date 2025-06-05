import React, { useState } from 'react';
import './Products.css';
import Hoodie1 from '@assets/images/Hoddie1.png';
import Joggers2 from '@assets/images/Joggers2.png';
import Shirt3 from '@assets/images/Grafitti-Shirt3.png';
import Jacket4 from '@assets/images/denim-jacket4.png';
import Sneakers5 from '@assets/images/Retro-Sneakers5.png'
import Cargo6 from '@assets/images/Cargo-pants6.png';
import Beanie7 from '@assets/images/Beanie-7.png';
import Socks8 from '@assets/images/Graffiti-Socks8.png'
import Cap9 from '@assets/images/urban-cap9.png';
import Socks10 from '@assets/images/pattern-socks10.png';
import Chains11 from '@assets/images/layered-chain11.png';
import Hoddie12 from '@assets/images/Grafitti-Hoddie12.png';
import TieDye13 from '@assets/images/tie_dye-shirt13.png';
import totebag14 from '@assets/images/tote-bag14.png';
import Shirt15 from '@assets/images/flannel-shirt15.png';
import vest16 from '@assets/images/street-vest.png';

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
    image: Joggers2,
  },
  {
    id: 3,
    name: 'Grafitti T-Shirt',
    price: '$29.00',
    image: Shirt3,
  },
  {
    id: 4,
    name: 'Oversized Denim Jacket',
    price: '$65.00',
    image: Jacket4,
  },
  {
    id: 5,
    name: 'Retro Sneakers',
    price: '$85.00',
    image: Sneakers5,
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: '$42.00',
    image: Cargo6,
  },
  {
    id: 7,
    name: 'Urban Beanie',
    price: '$19.00',
    image: Beanie7,
  },
  {
    id: 8,
    name: 'Graphic Socks',
    price: '$12.00',
    image: Socks8,
  },
  {
    id: 9,
    name: 'Streetwear Cap',
    price:'22.00',
       image: Cap9,
  },
  {
    id: 10, 
    name : 'Patterned Socks',
    price: "$12.00",
    image: Socks10,
  },
  {
    id: 11,
    name: 'Layered Chains',
    price: '$30.00',
    image: Chains11,
  }, 
  {
   id: 12,
   name: 'Graffiti Hoodie',
   price: '$49.00',
   image: Hoddie12,
  },
  {
    id: 13, 
    name: 'Tie-dye Shirt',
    price: '$27.00',
    image: TieDye13,
  },
  {
    id: 14,
    name: 'Minimalist Tote Bag',
    price: '$25.00',
    image: totebag14,
  },
  {
    id: 15,
    name: 'Flannel Shirt',
    price: '$39.00',
    image: Shirt15,
  },
  {
    id: 16,
    name: 'Street Utility Vest',
    price: '$70.00',
    image: vest16,
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