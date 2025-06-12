import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>SC Rapid Diagnostics Factory</h1>
      <p>
        Transform insights into impact with a connected, GenAI-diagnostic
        platform built on Accenture’s leading capabilities.
      </p>
      <div className="search-bar">
        <select>
          <option>All Offerings</option>
        </select>
        <input type="text" placeholder="Search Here" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
