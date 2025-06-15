const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ 
        message: 'User profile accessed succesfully',
        user: req.user,
    });
});

module.exports = router;