import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

const stripeRoutes = require('./routes.stripeRoutes');
app.use('/api/stripe', stripeRoutes);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('🟢 MongoDB conectado');
    app.get('/', (req, res) => {
      res.send('Backend server is running');
    });
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Error al conectar a MongoDB:', err);
  });

  