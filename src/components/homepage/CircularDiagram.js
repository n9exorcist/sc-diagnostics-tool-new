import React from "react";

const CircularDiagram = () => {
  return (
    <section className="circular-diagram">
      <div className="diagram-container">
        {/* Input Section */}
        <div className="input-section">
          <h3>INPUT</h3>
          <p>Client Demographics, Assessment Responses, Survey Responses</p>
        </div>

        {/* Central Content */}
        <div className="central-content">
          <div className="central-circle-container">
            <div className="circle">
              <div className="content-container">
                <div className="content-item">
                  <h3 className="title">Unified Assessment Framework</h3>
                  <p>
                    Onboard clients and launch standardized surveys and
                    assessments consistently
                  </p>
                </div>
                <div className="content-item">
                  <h3 className="title">
                    Data, Process, and Technology Analysis
                  </h3>
                  <p>
                    Use Next Gen assets to perform an in-depth analysis of Data,
                    Process &amp; Technology unearthing key insights. Benchmark
                    against leaders based on internal and external benchmarks.
                  </p>
                </div>
                <div className="content-item">
                  <h3 className="title">Gaps vs Recommendation Mapping</h3>
                  <p>
                    Identify the Gaps and provide Recommendations using AI to
                    move ahead in the Maturity Index. Identify Key KPIs and
                    baseline targets linked to value creation. Identify the key
                    initiatives and prioritize value creation.
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
