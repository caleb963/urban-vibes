import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onAuth }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Please, fill in all fields.");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert("Please, enter a valid email adress.");
            return;
        }
        
        try {
          const response = await axios.post( "/api/auth/login",{ email, password });

          const token = response.data.token;
          if (token) {
            localStorage.setItem("token", token);
          }

          if (onAuth && response.data.user) {
            onAuth(response.data.user);
          } else if (onAuth) {
            onAuth(null);
          }

          navigate("/");
        } catch (error) {
            const msg = error.response?.data?.message;
            alert(msg ? `Error: ${msg}`: "An error occurred while logging in. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
             />
             </div>
             <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
             </div>
             <button type="submit">Login</button>
        </form>
    );
}

export default Login;
