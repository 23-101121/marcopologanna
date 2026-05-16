import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

import errorBg from "../assets/hero-bg.png"; 
import lostShip from "../assets/hero-boat.png"; 

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="error-page" style={{ backgroundImage: `url(${errorBg})` }}>
      <div className="error__overlay"></div>

      <div className="error__content">
        <h1 className="error__code">404</h1>
        <h2 className="error__title">LOST IN THE UNKNOWN</h2>
        <p className="error__message">
          “We have veered far from the trade winds. 
          The path you seek has been swallowed by the desert sands, uncharted even by the Great Khan’s cartographers.”
        </p>
        
        <button className="error__btn" onClick={() => navigate("/")}>
          RETURN TO THE SILK ROAD
        </button>
      </div>

      <div className="error__visual">
        <img 
          src={lostShip} 
          alt="Lost Expedition Ship" 
          className="error__ship" 
        />
      </div>
    </main>
  );
}

export default ErrorPage;