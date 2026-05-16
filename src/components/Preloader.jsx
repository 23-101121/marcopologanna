import React, { useEffect, useState } from "react";
import "./Preloader.css";
import logo from "../assets/logo.png";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 800); // Time for fade animation to complete
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Controls loading speed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader ${isFading ? "preloader--fade-out" : ""}`}>
      <div className="preloader__content">
        <div className="preloader__logo-wrapper">
          <img src={logo} alt="Loading Logo" className="preloader__logo" />
          <div className="preloader__ring"></div>
        </div>
        <h2 className="preloader__text">CHRONICLES OF IL MILIONE</h2>
        <div className="preloader__bar-container">
          <div className="preloader__bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="preloader__percentage">{progress}%</span>
      </div>
    </div>
  );
}

export default Preloader;