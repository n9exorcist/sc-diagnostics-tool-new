import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard"; // New wrapper for all tools
import NavBar from "./components/NavBar"; // New NavBar component
import RapidDiagnosticMVP from "./components/RapidDiagnosticMVP";
import Outputs from "./components/Outputs"; // New Outputs component
import CardDetailPage from "./components/CardDetailPage";

function App() {
  return (
    <Router>
      <NavBar /> {/* 👈 Add here */}
      <Container>
        <Routes>
          <Route path="/" element={<RapidDiagnosticMVP />} />
          <Route path="/tool" element={<Dashboard />} />
          <Route path="/card/:cardType" element={<CardDetailPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
