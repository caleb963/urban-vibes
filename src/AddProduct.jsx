import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
    const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    });
    const newProduct = await res.json();
    onAdd(newProduct);
    setFormData({ name:'', price: '', image: ''});
};

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h3>Añadir nuevo producto</h3>
            <input
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
              type="text"
              name="price"
              placeholder="precio"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="URL de la imagen"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddProduct;