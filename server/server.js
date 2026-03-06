import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/user', userRoutes);



app.post('/api/stripe/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    console.log("Received cart items:", cartItems);

    const line_items = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
                product_data: {
                    name: item.name,
                    //images: [item.image], 
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
    }));
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });
        res.json({ id: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: 'Something went wrong '});
    }

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));