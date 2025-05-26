import React, { useState } from "react";
import "../assets/css/RapidDiagnosticMVP.css"; // Import your CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RapidDiagnosticMVP = ({ cards }) => {
  return (
    <div className="carousel-container">
      <h2>Rapid Diagnostic Factory | MVP</h2>
      <div className="carousel">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ type, title, description, imageSrc, ctaLink, label }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rad-content-grid-card rad-content-grid-card--${type}`}
      data-analytics-link-name={title}
      data-analytics-module-name="carousel-card"
    >
      <div className="rad-content-grid-card__sliding-content">
        {/* Front Content */}
        <div className="rad-content-grid-card__front-content">
          <button
            className="rad-content-grid-card__front-toggle"
            aria-expanded="false"
            aria-controls={`card-${Math.random().toString(36).substring(2, 9)}`}
            aria-label={`${label}: ${title}`}
            onClick={() => setIsExpanded(true)}
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
            onClick={() => setIsExpanded(false)}
          >
            Close
          </button>
          <p className="rad-content-grid-card__description">{description}</p>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <button className="rad-button rad-button--ghost">Expand</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RapidDiagnosticMVP;
