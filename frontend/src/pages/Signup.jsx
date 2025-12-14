import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/Signup.css";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      alert("Signup Successful! Please Login.");
      navigate("/login"); // Signup ke baad Login page par
    } catch (error) {
      alert("Signup Failed! Username or Email might be taken.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">Insta Mini</h1>
        <p className="signup-subtitle">Sign up to see photos and videos from your friends.</p>

        <form onSubmit={submit} className="signup-form">
          <input 
            className="signup-input"
            type="text"
            placeholder="Username" 
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input 
            className="signup-input"
            type="email"
            placeholder="Email" 
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input 
            className="signup-input"
            type="password" 
            placeholder="Password" 
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button className="signup-btn">Sign Up</button>
        </form>

        {/* 👇 Ye raha Login ka link */}
        <p className="login-redirect">
          Have an account? <Link to="/login" style={{color: "#0095f6", fontWeight: "bold", textDecoration: "none"}}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;