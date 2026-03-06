import 'dotenv/config'
import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import stripeRoutes from './routes/stripeRoutes.js';

import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stripe', stripeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

const {PORT = 3000, MONGO_URI} = process.env;
if (!MONGO_URI) {
  console.error('MONGO_URI no está definido en .env');
  process.exit(1);
}


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
    })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);
  });

  