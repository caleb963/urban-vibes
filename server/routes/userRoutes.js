import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: 'User profile accessed succesfully',
        user: req.user,
    });
});

export default router;