import React from "react";

const CircularDiagram = () => {
  return (
    <section className="circular-diagram">
      <div className="diagram-container">
        {/* Input Section */}
        <div className="input-section">
          <div className="input-grid">
            <div className="input-card">
              <h3>Maturity Assessment</h3>
              <p>Clients' SC maturity level & As-Is score</p>
            </div>

            <div className="input-card">
              <h3>Peer Financial Analysis</h3>
              <p>Financial metrics for listed companies in the industry.</p>
            </div>

            <div className="input-card">
              <h3>KPI Benchmarks</h3>
              <p>Industry standard benchmarks for key supply chain KPIs.</p>
            </div>

            <div className="input-card">
              <h3>Leading Practices</h3>
              <p>Industry best practices leveraging past client projects.</p>
            </div>

            <div className="input-card">
              <h3>Data Inputs</h3>
              <p>Excel data inputs shared by the client for analysis.</p>
            </div>
          </div>
        </div>

        {/* Central Content */}
        <div className="central-content">
          <div className="central-circle-container">
            <div className="circle">
              <div className="content-container">
                <div className="content-item">
                  <h3 className="title">Unified Diagnostic Orchestration</h3>
                  <p>
                    Seamlessly integrate inputs from myDiagnostic, VIP, CDI, and
                    benchmarks into a single GenAI-enabled workflow to launch
                    faster diagnostics at scale
                  </p>
                </div>
                <div className="content-item">
                  <h3 className="title">SC Improvement Recommendations</h3>
                  <p>
                    Leverage GenAI to synthesize structured and unstructured
                    inputs, perform comparative analysis employing industry best
                    practices, and deliver qualitative and quantitative insights
                    with recommendations and real-time visual outputs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="output-section">
          <h3>OUTPUT</h3>
          <p>
            Benchmark Against Industry Peers, Identify Current Maturity Level,
            Prioritize Areas of Improvement, Identify Recommendations for Value
            Creation, Prioritize Initiatives
          </p>
        </div>
      </div>
    </section>
  );
};

export default CircularDiagram;
