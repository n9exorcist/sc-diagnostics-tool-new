import React, { useState, useRef, useEffect } from "react";
import "../assets/css/RapidDiagnosticMVP.css"; // Import your CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Flickity (if not already installed)
import Flickity from "flickity";
import "flickity/css/flickity.css";

const RapidDiagnosticMVP = ({ cards }) => {
  const carouselRef = useRef(null);
  const flickityInstance = useRef(null);

  // Initialize Flickity on component mount
  useEffect(() => {
    console.log("Initializing Flickity...");
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
    <div className="carousel-container">
      <h2>Rapid Diagnostic Factory | MVP</h2>
      {/* Flickity Carousel */}
      <div className="carousel" ref={carouselRef}>
        {cards.map((card, index) => (
          <div key={index} className="carousel-cell">
            <Card {...card} />
          </div>
        ))}
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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rad-content-grid-card rad-content-grid-card--${type}`}
      data-analytics-link-name={title}
      data-analytics-module-name="carousel-card"
      onClick={() => setIsExpanded(!isExpanded)}
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
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc} alt={title} className="cmp-image__image" />
          </a>
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
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <button className="rad-button rad-button--ghost">Expand</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RapidDiagnosticMVP;
