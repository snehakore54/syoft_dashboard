import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import "../App.css";
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });
  const navigate = useNavigate(); // Use useNavigate to get navigate function

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://syoft.dev/Api/userlogin/api/userlogin";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/dashboard");
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_email">Email*:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_password">Password*:</label>
          <input
            type="password"
            id="user_password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/">Sign Up</Link></p>
    </div>
  );
}

export default Login;
