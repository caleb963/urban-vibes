import React, { useState } from 'react';
import api from '../../api.js';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await api.post('/api/contact', formData);
      setStatus({ success: true, message: res.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const msg = error.response?.data?.message;
      setStatus({ success: false, message: msg || 'Something went wrong. Please try again.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {status && (
        <p className={status.success ? 'contact-form__success' : 'contact-form__error'}>
          {status.message}
        </p>
      )}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;