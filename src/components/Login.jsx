import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password,
            });
            localStorage.setItem('token', res.data.token);
            onAuth(res.data.user);
        } catch (err) {
            alert('Password or email is incorrect');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChenge={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <button type="submit">Enter</button>
        </form>
    );  
}

export default Login;
