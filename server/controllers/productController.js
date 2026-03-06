import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Product name is required.' });
  }
  if (price === undefined || price === null || isNaN(price) || price < 0) {
    return res.status(400).json({ error: 'A valid price is required.' });
  }
  if (!image || !image.trim()) {
    return res.status(400).json({ error: 'Product image URL is required.' });
  }

  try {
    const newProduct = new Product({ name: name.trim(), price, image: image.trim() });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add product.' });
  }
};
