import React from "react";
import "../App.css";

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData) {
    return <p>Please login to view the dashboard.</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userData.user_firstname}!</h2>
      <p>Email: {userData.user_email}</p>
      <p>Phone: {userData.user_phone}</p>
      {/* Add other dashboard elements as needed */}
    </div>
  );
}

export default Dashboard;
