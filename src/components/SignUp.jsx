/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_email: "",
    user_password: "",
    user_phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://syoft.dev/Api/user_registeration/api/user_registeration";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          user_lastname: "Doe",
          user_city: "Hyderabad",
          user_zipcode: "500072",
        }),
      });
      const data = await response.json();
      console.log("Response:", data); // Handle success or error messages
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="form-full-container">
      <div className="form-left-container">
        <h1 className="head">Welcome to our community</h1>
        <p className="para">Fuse helps developers build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
        <div className="display">
        <div className="people">
          <div className="person">
            <img src="https://tse2.mm.bing.net/th?id=OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG&pid=Api&P=0&h=180" alt="" />
          </div>
          <div className="person">
            <img src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=" alt="" />
          </div>
          <div className="person">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/386-mj-1671-ae.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8ce11305f86caccab7046fa4b00c4cde" alt="" />
          </div>
          <div className="person">
            <img src="https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>
        <p className="para">More than 17k people joined us, it's your turn</p>
        </div>
      </div>

      <div className="signup-form">
        <div className="displaying-ele">
          <img src="https://media.designrush.com/agencies/303595/conversions/SYOFT-logo-profile.jpg" className="img" alt="" />
        <h2 className="sign-heading">Sign Up</h2>
        <p className="text">Already have an account? <Link to="/login">Login</Link></p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="user_firstname">First Name*</label>
            <input
              type="text"
              id="user_firstname"
              name="user_firstname"
              value={formData.user_firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="user_email">Email*</label>
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
            <label htmlFor="user_password">Password*</label>
            <input
              type="password"
              id="user_password"
              name="user_password"
              value={formData.user_password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="user_phone">Phone</label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="checkbox" required />
            <label htmlFor="checkbox">
              I agree to the <a href="#">Terms of Service</a> and 
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="btn">
            <button type="submit">Create Your Free Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
