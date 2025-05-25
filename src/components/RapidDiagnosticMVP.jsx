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
          <div class="flowchart">
            <div class="flow-box purple">myDiagnostic</div>
            <div class="flow-desc">
              Diagnostic Questionnaire for Plan, Source & Deliver
            </div>

            <div class="flow-box purple">VIP</div>
            <div class="flow-desc">Peer Financial Analysis</div>

            <div class="flow-box purple">CDI/Manual</div>
            <div class="flow-desc">
              Benchmarks for top 3 KPIs each across Plan, Fulfill & Source
            </div>

            <div class="flow-box purple">Sales order data</div>
            <div class="flow-desc">
              Raw sales order data from ERP or excel for OTIF calculation
            </div>

            <div class="flow-box purple">&lt;Data source&gt;</div>
            <div class="flow-desc">
              &lt;Any other input/data identified during MVP&gt;
            </div>
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

            <div class="flow-container">
              <div class="flow-box curved purple">ARC, ART</div>
              <div class="flow-box curved pink">Manual feed</div>
            </div>

            <div class="flow-container">
              <div class="flow-box outline">
                Leading practices Past CPG projects
              </div>
              <div class="flow-box outline">SME inputs</div>
            </div>
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
