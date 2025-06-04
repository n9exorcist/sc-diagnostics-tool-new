import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import AboutSection from "../components/homepage/AboutSection";
import CircularDiagram from "../components/homepage/CircularDiagram";
import FoundationData from "../components/homepage/FoundationData";
import StatisticsSection from "../components/homepage/StatisticsSection";
import SuccessStories from "../components/homepage/SuccessStories";
import Footer from "../components/homepage/Footer";
import "../assets/css/homestyles.css";

function HomeScreen() {
  return (
    <div className="home-screen-map">
      <HeroSection />
      <AboutSection />
      <CircularDiagram />
      <FoundationData />
      <StatisticsSection />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default HomeScreen;
