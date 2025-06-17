import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard"; // New wrapper for all tools
import NavBar from "./components/NavBar"; // New NavBar component
import RapidDiagnosticMVP from "./components/RapidDiagnosticMVP";
import Outputs from "./components/Outputs"; // New Outputs component
import CardDetailPage from "./components/CardDetailPage";
import AssessmentLauncher from "./components/AssessmentLauncher";
import BenchmarkingData from "./components/BenchmarkingData"; // New BenchmarkingData component
import HomeScreen from "./components/HomeScreen"; // Home screen component
import StartAssessment from "./components/StartAssessment";

function App() {
  return (
    <Router>
      <NavBar /> {/* 👈 Add here */}
      <>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/" element={<RapidDiagnosticMVP />} /> */}
          {/* <Route path="/" element={<BenchmarkingData />} /> */}
          <Route path="/tool" element={<Dashboard />} />
          <Route path="/card/:cardType" element={<CardDetailPage />} />
          <Route path="/launch-assessment" element={<AssessmentLauncher />} />
          <Route path="/start-assessment" element={<StartAssessment />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
