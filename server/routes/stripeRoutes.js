import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.Stripe_SECRET_KEY);
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    const line_items = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: { name: item.name },
            unit_amount: Math.round(parseFloat(item.price.replace('$', '')) * 100),
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
        } catch (err) {
            console.error('Stripe error:', err);
            res.status(500).json({ error: 'Something went wrong' });
        } 
    });

    export default router;