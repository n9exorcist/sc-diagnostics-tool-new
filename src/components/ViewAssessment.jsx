import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/AssessmentLauncher.css";

// Reuse your existing logic here
const ViewAssessment = () => {
  const { id } = useParams(); // Get the assessment ID from URL
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("file-upload");
  const [currentPage, setCurrentPage] = useState(1);

  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const handleGoBack = () => {
    navigate("/launch-assessment");
  };

  const tabPages = {
    "file-upload": 1,
    "kpi-calculation": 1,
    "kpi-benchmarking": 1,
    "supply-chain-diagnostics": 1,
    "peer-financial-anaylsis": 1,
    recommendations: 1,
    "business-case": 1,
    "generate-ppt": 1,
  };

  const tabContent = {
    "file-upload": [
      {
        title: "",
        description: (
          <div>
            <p>Please read the below instructions before proceeding:</p>
            <ul className="upload-instructions">
              <li>Please upload all mandatory files marked with (*)</li>
              <li>Upload masked data only — no PII allowed</li>
              <li>Templates must follow the required format</li>
              <li>
                {" "}
                <a href="#" style={{ color: "#ff00ff" }}>
                  Download templates here
                </a>
              </li>
            </ul>

            {/* File Upload Fields */}
            <div className="file-upload-group">
              <div className="file-upload">
                <label htmlFor="survey-response">Survey Response File*</label>
                <div className="file-input-container">
                  <input type="file" id="survey-response" accept=".xlsx" />
                  <span>Drag and drop file here or click to browse</span>
                  <button className="browse-button">Browse Files</button>
                </div>
                <select className="sheet-selector">
                  <option value="">Select Sheet*</option>
                  <option value="Sheet1">Sheet1</option>
                  <option value="Sheet2">Sheet2</option>
                </select>
              </div>

              <div className="file-upload">
                <label htmlFor="role-dept">Role & Department File*</label>
                <div className="file-input-container">
                  <input type="file" id="role-dept" accept=".xlsx" />
                  <span>Drag and drop file here or click to browse</span>
                  <button className="browse-button">Browse Files</button>
                </div>
                <select className="sheet-selector">
                  <option value="">Select Sheet*</option>
                  <option value="Sheet1">Sheet1</option>
                  <option value="Sheet2">Sheet2</option>
                </select>
              </div>
            </div>
          </div>
        ),
      },
    ],
    "kpi-calculation": [
      {
        title: "Step 1: Ability to download template",
        description: "Download Benchmarking Template",
      },
      {
        title: "Step 2: Import Template 1 for Benchmarks",
        description: "Import first benchmark template",
      },
      {
        title: "Step 3: Import Template 2 for Benchmarks",
        description: "Import second benchmark template",
      },
      {
        title: "Step 4: Generate Quartile Plots",
        description: "Generate visualizations for KPI benchmarks",
      },
      {
        title: "Step 5: View Improvement Ranges",
        description: "See improvement ranges based on industry data",
      },
      {
        title: "Step 6: Comments on KPI Performance",
        description: "Add or view comments on KPI performance",
      },
      {
        title: "Step 7: Summary View",
        description: "Final summary of benchmarked KPIs",
      },
    ],
    "kpi-benchmarking": [
      {
        title: "Step 1: Download Template",
        description: "Download the KPI calculation template",
      },
      {
        title: "Step 2: Import Templates for Calculating Each KPI",
        description: "Upload templates for KPI calculations",
      },
      {
        title: "Step 3: View Values Being Calculated",
        description: "See real-time calculated values",
      },
      {
        title: "Step 4: See Different Cuts of KPIs",
        description: "View KPIs from different perspectives",
      },
    ],
    "supply-chain-diagnostics": [
      {
        title: "Step 1: Download Financial Analysis Template",
        description: "Download the VIP financial analysis template",
      },
      {
        title: "Step 2: Import Data for VIP Input",
        description: "Upload Excel data for VIP inputs",
      },
      {
        title: "Step 3: View the Outputs",
        description: "See final outputs after processing",
      },
    ],
    "peer-financial-anaylsis": [
      {
        title: "Step 1: Download Diagnostic Template",
        description: "Download the diagnostic questionnaire template",
      },
      {
        title: "Step 2: Import Questionnaire",
        description: "Upload completed questionnaire",
      },
      {
        title: "Step 3: View myD Outputs",
        description: "View AI-generated diagnostic insights",
      },
    ],
    recommendations: [
      {
        title: "Step 1: Download Financial Analysis Template",
        description: "Download the VIP financial analysis template",
      },
      {
        title: "Step 2: Import Data for VIP Input",
        description: "Upload Excel data for VIP inputs",
      },
      {
        title: "Step 3: View the Outputs",
        description: "See final outputs after processing",
      },
    ],
    "business-case": [
      {
        title: "Step 1: Download Diagnostic Template",
        description: "Download the diagnostic questionnaire template",
      },
      {
        title: "Step 2: Import Questionnaire",
        description: "Upload completed questionnaire",
      },
      {
        title: "Step 3: View myD Outputs",
        description: "View AI-generated diagnostic insights",
      },
    ],
    "generate-ppt": [
      {
        title: "Step 1: Download Diagnostic Template",
        description: "Download the diagnostic questionnaire template",
      },
      {
        title: "Step 2: Import Questionnaire",
        description: "Upload completed questionnaire",
      },
      {
        title: "Step 3: View myD Outputs",
        description: "View AI-generated diagnostic insights",
      },
    ],
  };

  const totalPages = tabPages[selectedTab];
  const currentTabContent = tabContent[selectedTab]?.[currentPage - 1]; // Safe access

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    setCurrentPage(1); // Reset currentPage to 1 for the new tab
  };

  const getNextTab = () => {
    const tabs = Object.keys(tabPages);
    const currentIndex = tabs.indexOf(selectedTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    return tabs[nextIndex];
  };

  return (
    <div className="assessment-launcher view-assessment-container container">
      <div className="tabs view-assessment-tabs">
        <button
          className={`tab ${selectedTab === "file-upload" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("file-upload");
          }}
        >
          {capitalizeFirstLetter("file Upload")}
        </button>
        <button
          className={`tab ${selectedTab === "kpi-calculation" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("kpi-calculation");
          }}
        >
          {capitalizeFirstLetter("kpi Calculation")}
        </button>
        <button
          className={`tab ${
            selectedTab === "kpi-benchmarking" ? "active" : ""
          }`}
          onClick={() => {
            handleTabChange("kpi-benchmarking");
          }}
        >
          {capitalizeFirstLetter("kpi Benchmarking")}
        </button>
        <button
          className={`tab ${
            selectedTab === "supply-chain-diagnostics" ? "active" : ""
          }`}
          onClick={() => {
            handleTabChange("supply-chain-diagnostics");
          }}
        >
          {capitalizeFirstLetter("Supply Chain Diagnostics")}
        </button>
        <button
          className={`tab ${
            selectedTab === "peer-financial-anaylsis" ? "active" : ""
          }`}
          onClick={() => {
            handleTabChange("peer-financial-anaylsis");
          }}
        >
          {capitalizeFirstLetter("peer financial anaylsis")}
        </button>
        <button
          className={`tab ${selectedTab === "recommendations" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("recommendations");
          }}
        >
          {capitalizeFirstLetter("Recommendations")}
        </button>
        <button
          className={`tab ${selectedTab === "business-case" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("business-case");
          }}
        >
          {capitalizeFirstLetter("Business Case")}
        </button>
        <button
          className={`tab ${selectedTab === "generate-ppt" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("generate-ppt");
          }}
        >
          {capitalizeFirstLetter("Generate Presentation")}
        </button>
      </div>

      <div className="tab-content w-100">
        <h3>{capitalizeFirstLetter(selectedTab.replace(/-/g, " "))}</h3>

        <div className="page-content">
          {currentTabContent ? (
            <>
              <h4>{currentTabContent.title}</h4>
              <p>{currentTabContent.description}</p>
            </>
          ) : (
            <p>No content available for this page.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          {currentPage === totalPages ? (
            <button onClick={() => handleTabChange(getNextTab())}>
              Next Tab →
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAssessment;
