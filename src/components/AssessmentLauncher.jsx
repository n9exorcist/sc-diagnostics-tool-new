import React, { useState } from "react";
import "../assets/css/AssessmentLauncher.css"; // Import your CSS file for styling
import StartAssessment from "./StartAssessment";
import { Link } from "react-router-dom";

const AssessmentLauncher = () => {
  const [selectedTab, setSelectedTab] = useState("new");
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);

  const handleStartAssessment = () => {
    setShowAssessmentForm(true);
  };

  return (
    <div className="assessment-launcher container">
      <h2>Launch Assessment</h2>
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "new" ? "active" : ""}`}
          onClick={() => setSelectedTab("new")}
        >
          Start a New Assessment
        </button>
        <button
          className={`tab ${selectedTab === "existing" ? "active" : ""}`}
          onClick={() => setSelectedTab("existing")}
        >
          Open Existing Assessment
        </button>
        <button
          className={`tab ${selectedTab === "demo" ? "active" : ""}`}
          onClick={() => setSelectedTab("demo")}
        >
          Demo Assessment
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === "new" && (
          <div>
            <h3>Start a New Assessment</h3>
            <p>
              Begin a fresh assessment by defining project details and setting
              up your supply chain diagnostics.
            </p>

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
        {selectedTab === "existing" && (
          <div>
            <h3>Open Existing Assessment</h3>
            <p>Resume or review an assessment you've already started.</p>
            <input type="text" placeholder="Enter Assessment ID" />
            <button className="ms-2 launch-button">Open Assessment</button>
          </div>
        )}
        {selectedTab === "demo" && (
          <div>
            <h3>Demo Assessment</h3>
            <p>Explore a sample assessment to understand how it works.</p>
            <button className="launch-button">Launch Demo</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentLauncher;
