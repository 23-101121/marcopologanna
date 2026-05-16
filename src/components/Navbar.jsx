
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import logo from "../assets/logo.png";
import speakerOn from "../assets/speaker-on.png";
import speakerOff from "../assets/speaker-off.png";
import music from "../assets/music/silk-road-ambient.mp3";

function Navbar() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0.15;
  }, []);

  const toggleMusic = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <img src={logo} alt="Il Milione Logo" />
      </div>

      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/error">Error</Link>
        <Link to="/no-access">No Access</Link>
      </div>

      <button
        className="music-btn"
        onClick={toggleMusic}
      >
        <img
          src={isPlaying ? speakerOn : speakerOff}
          alt="music control"
        />
      </button>

      <audio
        ref={audioRef}
        loop
        src={music}
      />

    </nav>
  );
}

export default Navbar;