// src/components/InsightPanel.jsx
import React from "react";

const InsightPanel = ({ detailedInsights, summarizedInsights }) => {
  return (
    <div className="insight-panel">
      {/* Detailed Insights */}
      <div className="mb-4">
        <h5>Detailed Insights (15)</h5>
        <ul className="list-group list-group-flush">
          {detailedInsights.map((insight, index) => (
            <li key={`detail-${index}`} className="list-group-item">
              {insight}
            </li>
          ))}
        </ul>
      </div>

      {/* Summarized Insights */}
      <div>
        <h5>Summarized Insights (5)</h5>
        <ul className="list-group list-group-flush">
          {summarizedInsights.map((insight, index) => (
            <li key={`summary-${index}`} className="list-group-item">
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsightPanel;
