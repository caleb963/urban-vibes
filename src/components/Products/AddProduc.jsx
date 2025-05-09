import React, {useState} from 'react';
import './AddProcut.css';

const AddProduct = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: ''       
    });

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'applicaction/json'},
            body: JSON.stringify(formData),
        });
        
        if (!res.ok) throw new Error('Erro dding the product');

        const newProduct = await res.json();
        onAdd(newProduct);
        setFormData({ name: '', price: '', image: '' });
    } catch (error) {
        console.error('Error:', error);
    }
};

return (
    <form className="add-product-form" onSubmit={handleSubmit}>
        <h3>Adding a new product</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChannge={handleChange}
          required
        />
        <input 
          type="text"
          name="price"
          placeholder="Price"
          value="{formData.price}"
          onChange={handleChange}
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