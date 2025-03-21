import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
});

export default mongoose.model('Product', productSchema);
