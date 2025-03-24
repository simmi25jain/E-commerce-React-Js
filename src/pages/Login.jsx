import React, { useState } from 'react'
import '../pages/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Instance from '../axiosConfig';
function Login() {
    const navigate = useNavigate()
    const [FormData, setFormData] = useState({
        email: "",
        user_password: "",
    })
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response=Instance.post("/auth/register",{FormData});
            if ((await response).status===201) {
                console.log("Login Successful")
                navigate("/home");
            }
        } catch (error) {
            console.error("Login Failed");
            
        }
    }
    return (
        <div><div className="login-container">
            <h2>Login </h2>
            <form action="#" onClick={handleSubmit}>
                <div className="input-group">
                    <input type="email" id="email_id" placeholder="Enter your email" required />
                </div>
                <div className="input-group">
                    <input type="password" id="user_password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
                <p><a href="#">Forgot Password?</a></p>
            </form>
            <p>Don't have an account? <Link to="/SignUp"><a href="#">Sign Up</a></Link></p>
        </div>
        </div>
    )
}

export default Login
