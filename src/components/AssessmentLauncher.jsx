import React, { useState } from "react";
import "../assets/css/AssessmentLauncher.css"; // Import your CSS file for styling
import StartAssessment from "./StartAssessment";
import { Link } from "react-router-dom";

const AssessmentLauncher = () => {
  const [selectedTab, setSelectedTab] = useState("assessment-start");
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessmentForm(true);
  };

  return (
    <div className="assessment-launcher container">
      <div className="tabs">
        <button
          className={`tab ${
            selectedTab === "assessment-start" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("assessment-start")}
        >
          Assessment Start
        </button>
        <button
          className={`tab ${selectedTab === "benchmark-kpis" ? "active" : ""}`}
          onClick={() => setSelectedTab("benchmark-kpis")}
        >
          Benchmark the KPIs
        </button>
        <button
          className={`tab ${selectedTab === "calculate-kpis" ? "active" : ""}`}
          onClick={() => setSelectedTab("calculate-kpis")}
        >
          Calculate the KPIs
        </button>
        <button
          className={`tab ${
            selectedTab === "financial-analysis" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("financial-analysis")}
        >
          Conduct Financial Analysis
        </button>
        <button
          className={`tab ${selectedTab === "diagnostics" ? "active" : ""}`}
          onClick={() => setSelectedTab("diagnostics")}
        >
          Diagnostics
        </button>
        <button
          className={`tab ${selectedTab === "deliver" ? "active" : ""}`}
          onClick={() => setSelectedTab("deliver")}
        >
          Deliver
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === "assessment-start" && (
          <div>
            <h3>Assessment Start</h3>
            <p>
              Begin a fresh assessment by defining project details and setting
              up your supply chain diagnostics.
            </p>
            <ul>
              <li>1. Request Access</li>
              <li>2. Define Client Name</li>
              <li>3. Define Project Name</li>
              <li>
                4. Create an assessment name (by concatenating - Client Name +
                Project Key Name + SC Rapid Diagnostics)
              </li>
              <li>5. Raise access request for more users if any</li>
            </ul>
            <Link
              to="/start-assessment"
              onClick={handleStartAssessment}
              className="start-button"
            >
              Start Now
            </Link>
            {/* Show Assessment Form when button is clicked */}
            {showAssessmentForm && <StartAssessment />}
          </div>
        )}
        {selectedTab === "benchmark-kpis" && (
          <div>
            <h3>Benchmark the KPIs</h3>
            <p>
              Benchmark key performance indicators for your supply chain
              operations.
            </p>
            <ul>
              <li>1. Ability to download template</li>
              <li>2. Ability to import Template 1 for Benchmarks</li>
              <li>3. Ability to import Template 2 for Benchmarks</li>
              <li>4. Generate Quartile Plots</li>
              <li>5. Generate Improvement Ranges</li>
              <li>6. Generate comments on the KPI performance</li>
            </ul>
          </div>
        )}
        {selectedTab === "calculate-kpis" && (
          <div>
            <h3>Calculate the KPIs</h3>
            <p>Perform calculations for various supply chain KPIs.</p>
            <ul>
              <li>1. Ability to download template</li>
              <li>2. Ability to import Templates for calculating each KPIs</li>
              <li>3. Ability to view the values being calculated</li>
              <li>
                4. Once they click on it, they must be able to see different
                cuts of the KPIs
              </li>
            </ul>
          </div>
        )}
        {selectedTab === "financial-analysis" && (
          <div>
            <h3>Conduct Financial Analysis</h3>
            <p>
              Analyze financial metrics for listed companies in the industry.
            </p>
            <ul>
              <li>1. Ability to download template</li>
              <li>2. Ability to import data for VIP input</li>
              <li>3. View the outputs</li>
            </ul>
          </div>
        )}
        {selectedTab === "diagnostics" && (
          <div>
            <h3>Diagnostics</h3>
            <p>Perform diagnostic analysis using predefined questionnaires.</p>
            <ul>
              <li>1. Ability to download template</li>
              <li>2. Ability to import Questionnaire</li>
              <li>3. View myD outputs</li>
            </ul>
          </div>
        )}
        {selectedTab === "deliver" && (
          <div>
            <h3>Deliver</h3>
            <p>Consolidate and deliver comprehensive insights and outputs.</p>
            <ul>
              <li>1. A comprehensive view of all the outputs combined</li>
              <li>
                2. Key output visualization per KPI, Financial analysis,
                Diagnostics
              </li>
              <li>3. Filter for Plan, Source, Fulfil can be added here</li>
              <li>4. Brief Summary</li>
              <li>5. Detailed Summary on how to improve the Supply chain</li>
              <li>
                6. Chat bot with some standard prompts to support the
                modification of output view or any questions
              </li>
              <li>7. Option to download the output</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentLauncher;
