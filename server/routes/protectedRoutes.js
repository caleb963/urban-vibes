const express = requirez('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Hello ${req.user.email}, you have accessed a protected route!`});
});

module.exports = router;

