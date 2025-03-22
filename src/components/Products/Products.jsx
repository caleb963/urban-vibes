import React from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

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

