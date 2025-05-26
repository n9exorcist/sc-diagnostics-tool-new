import React from "react";
import "../assets/css/Outputs.css"; // Import your CSS file for styling
import "../assets/css/Outputs.css"; // Import your CSS file for styling

const Outputs = () => {
  return (
    <div className="outputs-container">
      <h2>Output (Illustrative)</h2>
      <div className="output-cards">
        {/* Qualitative Assessment */}
        <div className="output-card">
          <h4>Qualitative Assessment</h4>
          <img
            src="https://placeholder.com/300x200 "
            alt="Qualitative Assessment"
          />
        </div>

        {/* Quantitative Assessment */}
        <div className="output-card">
          <h4>Quantitative Assessment</h4>
          <img
            src="https://placeholder.com/300x200 "
            alt="Quantitative Assessment"
          />
        </div>

        {/* Top Recommendations */}
        <div className="output-card">
          <h4>Top Recommendations</h4>
          <img
            src="https://placeholder.com/300x200 "
            alt="Top Recommendations"
          />
        </div>
      </div>
    </div>
  );
};

export default Outputs;
