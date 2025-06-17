import React from "react";

const FoundationData = () => {
  return (
    <section className="foundation-data">
      <h2>FOUNDATION DATA</h2>
      <div className="data-columns">
        <div>
          <h3>Integrated Accenture Capability Data</h3>
          <p>
            Unified ingestion of structured inputs from myDiagnostic, VIP, CDI,
            and peer benchmarks to eliminate silos and drive holistic insights
          </p>
          <h3>Sales & Operational Data Feed</h3>
          <p>
            Raw ERP/excel-based transactional data (e.g., sales orders, OTIF) to
            enrich diagnostic accuracy with real-time operational metrics
          </p>
          <h3>GenAI-Enriched Knowledge Base</h3>
          <p>
            Combined insights from past client projects, SME inputs, and
            SharePoint repositories, layered with GenAI to contextualize and
            augment recommendations
          </p>
        </div>
        <div>
          <h3>KPI & Maturity Mapping</h3>
          <p>
            Key KPIs across Plan, Source, Deliver mapped against internal and
            external benchmarks for rapid maturity assessments
          </p>
          <h3>Value Levers and Value Drivers</h3>
          <p>
            Industry and platform-specific value chain repositories consisting
            of value levers, value drivers, and KPIs
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundationData;
