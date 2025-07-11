import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, 
        {expiresIn: '7d'},
    );
};

export const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'Email already in use' });

        const user = await User.create({ email, password });
        const token = generateToken(user._id);

        res.status(201).json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error('Error in register:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user._id);
        res.json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
