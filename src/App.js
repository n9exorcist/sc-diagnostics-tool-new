import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import UploadMyDiagnostic from "./components/UploadMyDiagnostic";
import UploadBenchmarkInputs from "./components/UploadBenchmarkInputs";
import UploadClientKPIInputs from "./components/UploadClientKPIInputs";
import KPIQuartileChart from "./components/KPIQuartileChart";
import ScopeOfImprovementTable from "./components/ScopeOfImprovementTable";
import ReportGenerator from "./components/KPIQuartileChart";
import InventoryTurns from "./components/InventoryTurns";
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
