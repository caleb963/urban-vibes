import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Hello ${req.user.email}, you have accessed a protected route!`});
});

export default router;

