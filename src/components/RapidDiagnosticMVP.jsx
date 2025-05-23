import React, { useEffect, useState } from "react";
import "../assets/css/RapidDiagnosticMVP.css"; // Import your CSS file for styling

const RapidDiagnosticMVP = () => {
  return (
    <div className="workflow-container">
      {/* Header */}
      <h1 className="header">
        Rapid Diagnostic Factory | MVP Execution Workflow
      </h1>

      <div className="main-content">
        {/* Left Section: Inputs */}
        <div className="left-section">
          <p className="description">
            Client gets individual links for providing inputs in myD, VIP and
            CDI benchmarks
          </p>
          <div className="input-box">
            <h3>myDiagnostic</h3>
            <p>DIAGNOSTIC QUESTIONNAIRE FOR Plan, Source & Deliver</p>
          </div>
          <div className="input-box">
            <h3>VIP</h3>
            <p>Peer Financial Analysis</p>
          </div>
          <div className="input-box">
            <h3>CDI/Manual</h3>
            <p>
              Benchmarks for top 3 KPIs each across Plan, Source, Fulfil &
              Deliver
            </p>
          </div>
          <div className="input-box">
            <h3>Sales order data</h3>
            <p>RAW sales order data from ERP or excel for OTIF calculation</p>
          </div>
          <div className="input-box data-source">
            <h3>&lt;Data source&gt;</h3>
            <p>&lt;Any other Input/data identified the MVP&gt;</p>
          </div>
        </div>

        {/* Center Section: Gen AI Tool */}
        <div className="center-section">
          <p className="chatbot-note">
            Chatbot capability to feed questions and generate responses based on
            inputs
          </p>
          <div className="gen-ai-box">
            <h2>Gen AI based Rapid Diagnostic tool</h2>
          </div>
          <div className="center-inputs">
            <div className="input-arrow-box">
              <p>
                Client inputs and Output from myD, VIP, CDI feed into tool
                solution
              </p>
            </div>
            <div className="input-box">ARC, ART</div>
            <div className="input-box">Leading practices Past CG projects</div>
            <div className="input-box">Manual feed SME inputs</div>
          </div>
        </div>

        {/* Right Section: Outputs */}
        <div className="right-section">
          <h3 className="output-title">Output (Illustrative)</h3>
          <div className="output-box">
            <h4>Qualitative Assessment</h4>
            <div className="mock-graphic">Radar Chart Placeholder</div>
          </div>
          <div className="output-box">
            <h4>Quantitative Assessment</h4>
            <div className="mock-graphic">Graph Placeholder</div>
          </div>
          <div className="output-box">
            <h4>Top recommendations</h4>
            <div className="mock-graphic">Chart Placeholder</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="accenture-note">
          <p>
            © 2025 Accenture. All rights reserved. Accenture Confidential and
            Proprietary Material.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RapidDiagnosticMVP;
