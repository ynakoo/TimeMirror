import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1 className="landing-title">Time Mirror</h1>
        
        <p className="landing-description">
          Track how you <span className="highlight">planned</span> to spend your day vs 
          how you <span className="highlight">actually</span> did.
        </p>
        
        <div className="action-buttons">
          <button 
            className="primary-btn"
            onClick={() => navigate("/option1")}
          >
            Expectation vs Reality
          </button>
          <button 
            className="secondary-btn"
            onClick={() => navigate("/option2")}
          >
            Card-Based Tracker
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;