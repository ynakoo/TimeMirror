import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OptionOnePage from "./pages/OptionOnePage";
import OptionTwoPage from "./pages/OptionTwoPage";
import AboutPage from "./pages/AboutPage";
// import History from "./pages/History";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      {/* Updated Navbar with blue/white theme */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Time Mirror</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/history">History</Link>
          <div className="auth-links">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        </div>
      </nav>

      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/option1" element={<OptionOnePage />} />
          <Route path="/option2" element={<OptionTwoPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;