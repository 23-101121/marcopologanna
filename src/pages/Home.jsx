import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import logo from "../assets/logo.png";
import speakerOn from "../assets/speaker-on.png";
import speakerOff from "../assets/speaker-off.png";
import music from "../assets/music/silk-road-ambient.mp3";

import heroBg from "../assets/hero-bg.png";
import marcoHero from "../assets/marco-hero.png";
import heroBoat from "../assets/hero-boat.png";

import characterBg from "../assets/character-bg.png";
import collagePapers from "../assets/collage-papers.png";
import marcoCollage from "../assets/marco-collage.png";
import stampMilione from "../assets/stamp-milione.png";
import iconExplorer from "../assets/icon-explorer.png";
import iconAuthor from "../assets/icon-author.png";
import iconBridge from "../assets/icon-bridge.png";

import journeyBg from "../assets/journey-bg.png";
import journeyBoat from "../assets/journey-boat.png";

import wondersBg from "../assets/wonders-bg.png";
import wonderImg1 from "../assets/wonder1.png";
import wonderImg2 from "../assets/wonder2.png";
import wonderImg3 from "../assets/wonder3.png";

import quoteBg from "../assets/quote-bg.png";
import archiveBg from "../assets/archive-bg.png";
import showcasePapers from "../assets/showcase-papers.png";
import archiveStamp from "../assets/archive-stamp.png";

function Home() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 50);

      const hero = document.querySelector(".hero");

      if (hero) {
        hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

const toggleMusic = async () => {
  try {
    if (!isPlaying) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  } catch (error) {
    console.log("Audio playback failed:", error);
  }
};

  const startJourney = () => {
    setIsJourneyStarted(true);
  };

  return (
    <main className="home">
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__logo">
          <img src={logo} alt="Il Milione Logo" />
        </div>

        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/error">Error</Link>
          <Link to="/no-access">No Access</Link>
        </div>

        <button className="music-btn" onClick={toggleMusic}>
          <img
            src={isPlaying ? speakerOn : speakerOff}
            alt="music control"
          />
        </button>

<audio
  ref={audioRef}
  loop
  preload="auto"
>
  <source src={music} type="audio/mpeg" />
</audio>      </nav>

      {/* HERO */}
      <section
        className="hero reveal"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <img src={heroBoat} alt="boat" className="hero__boat" />

        <img
          src={marcoHero}
          alt="Marco Polo"
          className="hero__character"
        />

        <div className="hero__content">
          <h1>MARCO POLO</h1>

          <h3>THE JOURNEY BEYOND BORDERS</h3>

          <p>
            “I didn’t tell half of what I saw,
            <br />
            for I knew I wouldn’t believe.”
          </p>
        </div>

        <div className="hero__overlay"></div>
      </section>

      {/* CHARACTER */}
      <section
        className="character reveal"
        style={{ backgroundImage: `url(${characterBg})` }}
      >
        <div className="character__container">
          <div className="character__collage">
            <img
              src={collagePapers}
              alt="Manuscript"
              className="collage__asset collage__asset--papers"
            />

            <img
              src={marcoCollage}
              alt="Marco Portrait"
              className="collage__asset collage__asset--portrait"
            />

            <img
              src={stampMilione}
              alt="Wax Stamp"
              className="collage__asset collage__asset--stamp"
            />
          </div>

          <div className="character__info">
            <div className="info__block">
              <div className="info__icon-wrapper">
                <img src={iconExplorer} alt="Explorer" />
              </div>

              <div className="info__text">
                <h3>EXPLORER</h3>

                <p>
                  Traveled across Asia for over 24 years, following the Silk
                  Road and discovering new lands and cultures.
                </p>
              </div>
            </div>

            <div className="info__block">
              <div className="info__icon-wrapper">
                <img src={iconAuthor} alt="Author" />
              </div>

              <div className="info__text">
                <h3>AUTHOR</h3>

                <p>
                  Wrote “Il Milione”, one of the most influential travel
                  accounts in history.
                </p>
              </div>
            </div>

            <div className="info__block">
              <div className="info__icon-wrapper">
                <img src={iconBridge} alt="Bridge" />
              </div>

              <div className="info__text">
                <h3>BRIDGE</h3>

                <p>
                  Connected Eastern and Western cultures and expanded global
                  awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="character__bio">
          <h2>HISTORICAL CHARACTER</h2>

          <p>
            Marco Polo (1254 – 1324) was a Venetian explorer, merchant, and
            writer whose journeys across Asia introduced Europe to new
            cultures, lands, and ideas.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className="journey reveal"
        style={{ backgroundImage: `url(${journeyBg})` }}
      >
        <div className="journey__content">
          <h2>THE SILK ROAD JOURNEY</h2>

          <p>
            Follow Marco Polo’s epic journey from Venice to the heart of Asia.
          </p>

          <button onClick={startJourney} className="journey-btn">
            START THE JOURNEY
          </button>
        </div>

        <div className="journey__map-container">
          <img
            src={journeyBoat}
            alt="Journey Boat"
            className={`journey__boat ${
              isJourneyStarted ? "journey__boat--moving" : ""
            }`}
          />
        </div>
      </section>

      {/* WONDERS */}
      <section
        className="wonders reveal"
        style={{ backgroundImage: `url(${wondersBg})` }}
      >
        <div className="wonders__container">
          <div className="wonders__title">
            <h2>ENCOUNTERS & WONDERS</h2>

            <p>
              Marco Polo's travels took him into distant lands and extraordinary
              cultures.
            </p>
          </div>

          <div className="wonders__grid">
            <div className="wonder__card">
              <img src={wonderImg1} alt="The Mongol Empire" />

              <h4>THE MONGOL EMPIRE</h4>

              <p>Served under Kublai Khan, ruler of Cathay.</p>
            </div>

            <div className="wonder__card">
              <img src={wonderImg2} alt="Exotic Cultures" />

              <h4>EXOTIC CULTURES</h4>

              <p>Discovered new customs and traditions.</p>
            </div>

            <div className="wonder__card">
              <img src={wonderImg3} alt="Wonders of Asia" />

              <h4>WONDERS OF ASIA</h4>

              <p>From golden palaces to spice islands and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        className="quote-section reveal"
        style={{ backgroundImage: `url(${quoteBg})` }}
      >
        <div className="quote__container">
          <span className="quote__mark">“</span>

          <h2>
            I DIDN'T TELL HALF OF WHAT I SAW, FOR I KNEW I WOULDN'T BELIEVE.
          </h2>

          <span className="quote__mark">”</span>

          <p className="quote__author">
            MARCO POLO ON HIS DEATHBED
          </p>
        </div>
      </section>

      {/* ARCHIVE */}
      <section
        className="archive reveal"
        style={{ backgroundImage: `url(${archiveBg})` }}
      >
        <div className="archive__showcase">
          <img
            src={showcasePapers}
            alt="Historical Papers"
            className="archive__papers"
          />

          <img
            src={marcoCollage}
            alt="Marco Portrait"
            className="collage__asset collage__asset--portrait"
          />

          <img
            src={archiveStamp}
            alt="Archive Seal"
            className="archive__seal"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__col">
            <h4>IL MILIONE ARCHIVE</h4>

            <p>
              Preserving the legacy of Marco Polo and the spirit of exploration
              that connects the world.
            </p>
          </div>

          <div className="footer__col">
            <h4>EXPLORE</h4>

            <Link to="/">HOME</Link>
            <Link to="/journey">JOURNEY</Link>
            <Link to="/archive">ARCHIVE</Link>
          </div>

          <div className="footer__col footer__col--center">
          <img src={logo} alt="Il Milione Logo" />
          </div>

          <div className="footer__col">
            <h4>TIMELINE</h4>

            <p>1254 – Born in Venice</p>
            <p>1271 – Journey to Asia</p>
            <p>1295 – Return to Venice</p>
            <p>1324 – Marco Polo's Passing</p>
          </div>

          <div className="footer__col">
            <h4>NEWSLETTER</h4>

            <p>Subscribe for stories of legends and journeys.</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2025 Il Milione Archive. In memoriam Marco Polo, Omnia
            Explorata.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;