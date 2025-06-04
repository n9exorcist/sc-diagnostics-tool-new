import React from "react";
import "../assets/css/BenchmarkingData.css"; // Import your CSS file for styling

const BenchmarkingData = () => {
  return (
    <div className="benchmarking-container">
      <h1 className="title">Benchmarking Data</h1>
      <div className="circle-container">
        <div className="branch input-branch">
          <h2>Inputs</h2>
          <ul>
            <li>Data Source 1</li>
            <li>Data Source 2</li>
            <li>Data Source 3</li>
          </ul>
        </div>
        <div className="branch output-branch">
          <h2>Outputs</h2>
          <ul>
            <li>KPI 1: Direct Spend % Revenue</li>
            <li>KPI 2: Indirect Spend % Revenue</li>
            <li>KPI 3: FTEs per B of Revenue</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkingData;
