import React from "react";

const CircularDiagram = () => {
  return (
    <section className="circular-diagram">
      <h2>Input & Output</h2>
      <div className="diagram-container">
        {/* Input Section */}
        <div className="input-section">
          <h3>INPUT</h3>
          <p>Client Demographics, Assessment Responses, Survey Responses</p>
        </div>

        {/* Central Content */}
        <div className="central-content">
          <div className="circle-container">
            <div className="circle"></div>
            {/* Add SVG or image for the circular diagram */}
          </div>
          <h3>Unified Assessment Framework</h3>
          <p>
            Onboard clients and launch standardized surveys and assessments
            consistently
          </p>
          <h3>Data, Process, and Technology Analysis</h3>
          <p>
            Use Next Gen assets to perform an in-depth analysis of Data, Process
            & Technology unearthing key insights.
          </p>
          <h3>Gaps vs Recommendation Mapping</h3>
          <p>
            Identify the Gaps and provide Recommendations using AI to move ahead
            in the Maturity Index. Identify Key KPIs and baseline targets linked
            to value creation. Identify the key initiatives and prioritize value
            creation.
          </p>
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
