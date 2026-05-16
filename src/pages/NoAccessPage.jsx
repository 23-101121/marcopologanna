import React from "react";
import { useNavigate } from "react-router-dom";
import "./NoAccessPage.css";

import forbiddenBg from "../assets/hero-bg.png"; 
import imperialSeal from "../assets/stamp-milione.png"; 

function NoAccessPage() {
  const navigate = useNavigate();

  return (
    <main className="no-access" style={{ backgroundImage: `url(${forbiddenBg})` }}>
      <div className="no-access__overlay"></div>

      <div className="no-access__content">
        <div className="no-access__seal-wrapper">
          <img 
            src={imperialSeal} 
            alt="Imperial Court Seal" 
            className="no-access__seal" 
          />
        </div>

        <h1 className="no-access__code">403</h1>
        <h2 className="no-access__title">FORBIDDEN CHAMBERS</h2>
        <p className="no-access__message">
          “Halt, traveler. You do not possess the golden tablet passport required 
          to cross this province. These records are sealed under imperial decree by the Grand Court.”
        </p>
        
        <button className="no-access__btn" onClick={() => navigate("/")}>
          TURN BACK TO CAMP
        </button>
      </div>
    </main>
  );
}

export default NoAccessPage;