import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 Ye Import Zaroori Hai
import api from "../api/axios";
import useAuth from "../hooks/useAuth";
import "../styles/Login.css";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // 👈 Redirect karne ke liye hook

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
      alert("Login Successful!"); 
      navigate("/"); // 👈 Login ke baad seedha HOME page par bhej do
    } catch (error) {
      alert("Login Failed! Please check email/password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Insta Mini</h1>
        
        <form onSubmit={submit} className="login-form">
          <input 
            className="login-input"
            type="email" 
            placeholder="Phone number, username, or email" 
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input 
            className="login-input"
            type="password" 
            placeholder="Password" 
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          
          <button className="login-btn">Log In</button>
        </form>

        {/* 👇 Ye raha Signup ka link jo missing tha */}
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup" style={{color: "#0095f6", fontWeight: "bold", textDecoration: "none"}}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;