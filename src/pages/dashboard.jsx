// src/pages/dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4"> {username}! Welcome </h1>
      <button
        onClick={handleLogout}
        className="mt-4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
