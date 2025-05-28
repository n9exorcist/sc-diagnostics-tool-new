import React, { useState, useRef, useEffect } from "react";
import "../assets/css/RapidDiagnosticMVP.css"; // Import your CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, Link } from "react-router-dom";

// Import Flickity (if not already installed)
import Flickity from "flickity";
import "flickity/css/flickity.css";

const RapidDiagnosticMVP = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/cards.json"); // Replace with actual API endpoint
      const data = await response.json();
      console.log("Fetched cards:", data); // Log the fetched data
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const carouselRef = useRef(null);
  const flickityInstance = useRef(null);

  // Initialize Flickity on component mount
  useEffect(() => {
    console.log("Initializing Flickity...");
    fetchData();
    flickityInstance.current = new Flickity(carouselRef.current, {
      cellAlign: "left",
      contain: true,
      wrapAround: false,
      pageDots: false,
      prevNextButtons: true, // 👈 This automatically adds arrows
      draggable: true,
      freeScroll: false,
    });

    return () => {
      if (flickityInstance.current) {
        console.log("Destroying Flickity...");
        flickityInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="homepage-container">
      {/* Intro Section */}
      <div className="tool-intro">
        <h1>SC Rapid Diagnostics Factory Tool</h1>
        <p className="tool-description">
          Accelerate diagnostics and benchmarking for Supply Chain capabilities
          using Gen AI.
        </p>
        <p className="tool-subdescription">
          Request Access, Define Project, Benchmark KPIs, Conduct Financial
          Analysis, Diagnostics & Deliver Outputs – all in one interface.
        </p>
      </div>

      {/* Flickity Carousel */}
      <div className="card-carousel-section">
        <div className="carousel" ref={carouselRef}>
          {cards.map((card, index) => (
            <div key={index} className="carousel-cell">
              <Card {...card} cards={cards} />
            </div>
          ))}
        </div>
      </div>

      {/* Launch Button */}
      <div className="launch-buttons mt-5">
        <Link to="/launch-assessment" className="launch-button">
          Launch New Assessment
        </Link>
      </div>
    </div>
  );
};

const Card = ({
  type,
  title,
  description,
  details,
  imageSrc,
  ctaLink,
  label,
  cards,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  console.log("Card props:", cards);
  return (
    <div
      className={`rad-content-grid-card rad-content-grid-card--${type}`}
      onClick={() => {
        setIsExpanded(!isExpanded);
        navigate(`/card/${type}`, {
          state: { cards },
        });
      }}
      style={{ cursor: "pointer" }}
    >
      <div
        className="rad-content-grid-card__sliding-content"
        style={{
          transform: isExpanded ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Content */}
        <div className="rad-content-grid-card__front-content">
          <button
            className="rad-content-grid-card__front-toggle"
            aria-expanded="false"
            aria-controls={`card-${Math.random().toString(36).substring(2, 9)}`}
            aria-label={`${label}: ${title}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
          >
            Expand
          </button>

          <img src={imageSrc} alt={title} className="cmp-image__image" />

          <div className="rad-content-grid-card__label">{label}</div>
          <div className="rad-content-grid-card__title">{title}</div>
        </div>

        {/* Back Content */}
        <div className="rad-content-grid-card__back-content">
          <button
            className="rad-icon-button rad-content-grid-card__close-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            Close
          </button>
          <p className="rad-content-grid-card__description">{description}</p>
          <ul className="rad-content-grid-card__details-list">
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <button
            className="rad-button rad-button--ghost"
            onClick={() => window.open(ctaLink, "_blank")}
          >
            Expand
          </button>
        </div>
      </div>
    </div>
  );
};

export default RapidDiagnosticMVP;
