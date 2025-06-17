import React, { useState } from "react";
import "../assets/css/AssessmentLauncher.css";

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const AssessmentLauncher = () => {
  const [selectedTab, setSelectedTab] = useState("assessment-start");
  const [currentPage, setCurrentPage] = useState(1);

  const tabPages = {
    "assessment-start": 5,
    "benchmark-kpis": 7,
    "calculate-kpis": 4,
    "financial-analysis": 3,
    diagnostics: 3,
    deliver: 7,
  };

  const tabContent = {
    "assessment-start": [
      {
        title: "Step 1: Request Access",
        description: "Click the button below to request access.",
      },
      {
        title: "Step 2: Define Client Name",
        description: "Please enter client name",
      },
      {
        title: "Step 3: Define Project Name",
        description: "Please enter project name",
      },
      {
        title: "Step 4: Create Assessment Name",
        description:
          "Your assessment name will be auto-generated based on the inputs.",
      },
      {
        title: "Step 5: Raise Access Request",
        description: "Raise access request for more users if any.",
      },
    ],
    "benchmark-kpis": [
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
    "calculate-kpis": [
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
    "financial-analysis": [
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
    diagnostics: [
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
    deliver: [
      {
        title: "Step 1: Comprehensive Output View",
        description: "All output combined into one report",
      },
      {
        title: "Step 2: Output Visualization Per Area",
        description:
          "Visualize key outputs per area: KPI, Financial, Diagnostics",
      },
      {
        title: "Step 3: Filter by Plan, Source, Fulfil",
        description: "Apply filters to narrow down results",
      },
      {
        title: "Step 4: Brief Summary",
        description: "High-level summary of findings",
      },
      {
        title: "Step 5: Detailed Summary on Improvements",
        description: "Detailed recommendations for supply chain improvements",
      },
      {
        title: "Step 6: Chatbot Interaction",
        description:
          "Interact with chatbot to modify output view or ask questions",
      },
      {
        title: "Step 7: Download Final Output",
        description: "Option to download the full diagnostic output",
      },
    ],
  };

  const totalPages = tabPages[selectedTab];
  const currentTabContent = tabContent[selectedTab][currentPage - 1];

  return (
    <div className="assessment-launcher container">
      <div className="tabs">
        <button
          className={`tab ${
            selectedTab === "assessment-start" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedTab("assessment-start");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("assessment start")}
        </button>
        <button
          className={`tab ${selectedTab === "benchmark-kpis" ? "active" : ""}`}
          onClick={() => {
            setSelectedTab("benchmark-kpis");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("Benchmark the KPIs")}
        </button>
        <button
          className={`tab ${selectedTab === "calculate-kpis" ? "active" : ""}`}
          onClick={() => {
            setSelectedTab("calculate-kpis");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("Calculate the KPIs")}
        </button>
        <button
          className={`tab ${
            selectedTab === "financial-analysis" ? "active" : ""
          }`}
          onClick={() => {
            setSelectedTab("financial-analysis");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("Conduct Financial Analysis")}
        </button>
        <button
          className={`tab ${selectedTab === "diagnostics" ? "active" : ""}`}
          onClick={() => {
            setSelectedTab("diagnostics");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("Diagnostics")}
        </button>
        <button
          className={`tab ${selectedTab === "deliver" ? "active" : ""}`}
          onClick={() => {
            setSelectedTab("deliver");
            setCurrentPage(1);
          }}
        >
          {capitalizeFirstLetter("Deliver")}
        </button>
      </div>

      <div className="tab-content w-100">
        <h3>{capitalizeFirstLetter(selectedTab.replace(/-/g, " "))}</h3>

        <div className="page-content">
          <h4>{currentTabContent.title}</h4>
          <p>{currentTabContent.description}</p>
        </div>

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
            <button onClick={() => alert("Task Completed!")}>Finish</button>
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

export default AssessmentLauncher;
