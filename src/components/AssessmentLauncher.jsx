import React, { useState } from "react";
import "../assets/css/AssessmentLauncher.css";
import { useNavigate } from "react-router-dom";

const AssessmentLauncher = () => {
  const [selectedTab, setSelectedTab] = useState("new");
  const [assessmentId, setAssessmentId] = useState("");

  const navigate = useNavigate();

  const handleOpenAssessment = () => {
    if (assessmentId.trim()) {
      navigate(`/assessment/${assessmentId}`);
    } else {
      alert("Please enter an Assessment ID.");
    }
  };

  return (
    <div className="assessment-launcher container">
      <h2>Launch Assessment</h2>
      <div className="tabs d-flex justify-content-center">
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
            <p>Begin a fresh assessment by defining project details.</p>
            <button className="launch-button">Start Now</button>
          </div>
        )}

        {selectedTab === "existing" && (
          <div>
            <h3>Open Existing Assessment</h3>
            <p>Resume or review an assessment you've already started.</p>
            <input
              type="text"
              placeholder="Enter Assessment ID"
              value={assessmentId}
              onChange={(e) => setAssessmentId(e.target.value)}
            />
            <button className="launch-button" onClick={handleOpenAssessment}>
              Open Assessment
            </button>
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
