import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard"; // New wrapper for all tools
import NavBar from "./components/NavBar"; // New NavBar component
import RapidDiagnosticMVP from "./components/RapidDiagnosticMVP";
import Outputs from "./components/Outputs"; // New Outputs component

function App() {
  const [cardss, setCards] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cards.json"); // Replace with actual API endpoint
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <NavBar /> {/* 👈 Add here */}
      <Container>
        <Routes>
          <Route path="/" element={<RapidDiagnosticMVP cards={cardss} />} />
          <Route path="/tool" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
