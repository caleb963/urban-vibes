import { useState, useContext } from "react";
import api from '../../api.js';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.jsx';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Please, fill in all fields.");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert("Please, enter a valid email address.");
            return;
        }

        if (password.length < 6 ) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        try {
            const response = await api.post('/api/auth/register', { email, password });

            login(response.data.user, response.data.token);
            navigate("/");
        } catch (error) {
            const msg = error.response?.data?.message;
            alert(msg ? `Error: ${msg}` : "An error occurred while registering. Please try again later.");
            }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
            <div>
                <label htmlFor="email">email:</label>
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
                <label htmlFor="password">Password</label>
                <input
                type="password" 
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;