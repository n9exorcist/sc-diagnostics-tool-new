import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard"; // New wrapper for all tools
import NavBar from "./components/NavBar"; // New NavBar component

function App() {
  return (
    <Router>
      <NavBar /> {/* 👈 Add here */}
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tool" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;
