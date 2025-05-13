import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard"; // New wrapper for all tools

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Homepage />} />

        {/* Tool Dashboard */}
        <Route path="/tool" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
