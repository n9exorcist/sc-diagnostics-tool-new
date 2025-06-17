import React, { useState } from "react";
import HeroSection from "../components/homepage/HeroSection";
import AboutSection from "../components/homepage/AboutSection";
import CircularDiagram from "../components/homepage/CircularDiagram";
import FoundationData from "../components/homepage/FoundationData";
// import StatisticsSection from "../components/homepage/StatisticsSection";
import SuccessStories from "../components/homepage/SuccessStories";
import Footer from "../components/homepage/Footer";
import RapidDiagnosticMVP from "../components/RapidDiagnosticMVP";
import "../assets/css/homestyles.css";
import Loader from "../components/Loader"; // Import the Loader component

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");

  const handleButtonClick = () => {
    setIsLoading(true);
    setLoaderMessage("Data is sent to the backend...");

    // Simulate backend processing
    setTimeout(() => {
      setIsLoading(true);
      setLoaderMessage("Data is being processed...");
    }, 2000);

    // Simulate completion
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="home-screen-map">
      <HeroSection />

      <AboutSection />
      <CircularDiagram />
      <FoundationData />
      {/* <StatisticsSection /> */}
      <RapidDiagnosticMVP
        isLoading={isLoading}
        onButtonClick={handleButtonClick}
      />
      <Footer />
      {/* Loader */}
      {isLoading && <Loader message={loaderMessage} />}
    </div>
  );
};

export default HomeScreen;
