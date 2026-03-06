import React, { useState } from 'react';
import api from '../../api.js';
import './AddProduct.css';

const AddProduct = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/products', {
                ...formData,
                price: parseFloat(formData.price),
            });
            onAdd(res.data);
            setFormData({ name: '', price: '', image: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h3>Add a new product</h3>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddProduct;