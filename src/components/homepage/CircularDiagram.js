import React, { useState, useEffect } from "react";

const chartData = [
  {
    title: "Maturity Assessment",
    src: "/figure1.jpg",
    alt: "Maturity Assessment",
  },
  {
    title: "KPI Calculation & Visualization",
    src: "/figure2.jpg",
    alt: "KPI Calculation & Visualization",
  },
  {
    title: "Financial Peer Analysis",
    src: "/figure3.jpg",
    alt: "Financial Peer Analysis",
  },
  {
    title: "KPI Benchmarking",
    src: "/figure4.jpg",
    alt: "KPI Benchmarking",
  },
  {
    title: "Top Key Recommendations",
    src: "/figure5.jpg",
    alt: "Top Key Recommendations",
  },
  {
    title: "Top-down Business case",
    src: "/figure6.jpg",
    alt: "Top-down Business case",
  },
];

const CircularDiagram = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + visibleCount) % chartData.length
      );
    }, 3000); // 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Get the current visible charts
  const visibleCharts = chartData.slice(startIndex, startIndex + visibleCount);

  // If near end, wrap around to show remaining
  const chartsToRender =
    visibleCharts.length < visibleCount
      ? [
          ...visibleCharts,
          ...chartData.slice(0, visibleCount - visibleCharts.length),
        ]
      : visibleCharts;
  return (
    <section className="circular-diagram d-flex flex-column align-items-center">
      <div className="diagram-container position-relative">
        {/* Input Section */}
        <div className="input-section">
          <h3>INPUT</h3>
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
          <div className="output-content">
            {chartsToRender.map((chart, index) => (
              <div className="chart-container" key={index}>
                <h4>{chart.title}</h4>
                <img src={chart.src} alt={chart.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <img
          src="/arrow.png"
          alt="Left Arrow"
          className="left-arrow left-arrow-left"
        />

        {/* Right Arrow */}
        <img
          src="/arrow.png"
          alt="Right Arrow"
          className="left-arrow left-arrow-right"
        />
        {/* Downward Arrow Below Central Circle */}
        <img
          src="/arrow.png"
          alt="Downward Arrow"
          className="left-arrow down-arrow"
        />
      </div>
    </section>
  );
};

export default CircularDiagram;
