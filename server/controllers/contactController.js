export const submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        console.log('Contact form submission:', { name, email, message });
        res.status(200).json({ message: 'Message received. We will get back to you soon!' });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
