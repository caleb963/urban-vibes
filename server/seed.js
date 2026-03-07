import 'dotenv/config';
import mongoose from 'mongoose';
import Product from './models/Product.js';

const products = [
    { name: 'Streetwear Hoodie',       price: 45, image: '/images/Hoddie1.png' },
    { name: 'Urban Joggers',            price: 38, image: '/images/Joggers2.png' },
    { name: 'Graffiti T-Shirt',         price: 29, image: '/images/Grafitti-Shirt3.png' },
    { name: 'Oversized Denim Jacket',   price: 65, image: '/images/denim-jacket4.png' },
    { name: 'Retro Sneakers',           price: 85, image: '/images/Retro-Sneakers5.png' },
    { name: 'Cargo Pants',              price: 42, image: '/images/Cargo-pants6.png' },
    { name: 'Urban Beanie',             price: 19, image: '/images/Beanie-7.png' },
    { name: 'Graphic Socks',            price: 12, image: '/images/Graffiti-Socks8.png' },
    { name: 'Streetwear Cap',           price: 22, image: '/images/urban-cap9.png' },
    { name: 'Patterned Socks',          price: 12, image: '/images/pattern-socks10.png' },
    { name: 'Layered Chains',           price: 30, image: '/images/layered-chain11.png' },
    { name: 'Graffiti Hoodie',          price: 49, image: '/images/Grafitti-Hoddie12.png' },
    { name: 'Tie-Dye Shirt',            price: 27, image: '/images/tie_dye-shirt13.png' },
    { name: 'Minimalist Tote Bag',      price: 25, image: '/images/tote-bag14.png' },
    { name: 'Flannel Shirt',            price: 39, image: '/images/flannel-shirt15.png' },
    { name: 'Street Utility Vest',      price: 70, image: '/images/street-vest.png' },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');

        await Product.deleteMany();
        console.log('Existing products cleared');

        await Product.insertMany(products);
        console.log(`${products.length} products seeded successfully`);
    } catch (err) {
        console.error('Seed error:', err);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
};

seed();
