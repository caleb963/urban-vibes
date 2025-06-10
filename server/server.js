const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

app.use(cors);
app.use(express.json());

app.post('/api/stripe/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;

    const line_items = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
                product_data: {
                    name: item.name,
                    images: [item.image], 
                },
                unit_amount: parseFloat(item.price.replace('$', '' )) * 100,
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