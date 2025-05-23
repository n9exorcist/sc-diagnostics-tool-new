import React, { useState, useCallback } from "react";
import "./Homepage.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

// Sample data for cards
const cards = [
  {
    title: "Benchmarking of kpi",
    description:
      "Benchmarking of kpi of identified key performing indicators for client.",
    backDescription:
      "Benchmarking of kpi of identified key performing indicators for client.",
    imageSrc:
      "https://placehold.co/300x200/000000/FFFFFF/?text=Inventory+Turns ",
    category: "Plan",
  },
  {
    title: "Performing a maturity assessment",
    description:
      "Performing a maturity assessment of the supply chain across what all areas",
    backDescription:
      "Performing a maturity assessment of the supply chain across what all areas",
    imageSrc: "https://placehold.co/300x200/000000/FFFFFF/?text=OTIF ",
    category: "Fulfill",
  },
  {
    title: "fiancial peer analysis",
    description: "Do a fiancial peer analysis.",
    backDescription: "Do a fiancial peer analysis ",
    imageSrc:
      "https://placehold.co/300x200/000000/FFFFFF/?text=Supplier+Performance ",
    category: "Source",
  },
  {
    title: "Benchmarking",
    description: "Benchmarking against the leading practices.",
    backDescription: "Benchmarking against the leading practices ",
    imageSrc:
      "https://placehold.co/300x200/000000/FFFFFF/?text=Benchmarking+Performance ",
    category: "Source",
  },
];

const Homepage = () => {
  const [file, setFile] = useState(null);
  const [selectedFunction, setSelectedFunction] = useState("All");
  const { accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = useCallback((e) => {
    setUploading(true);
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setTimeout(() => {
        alert(`File selected: ${selectedFile.name}`);
        setFile(selectedFile);
        setUploading(false);
      }, 1000); // Simulated delay
    }
  }, []);

  const filteredCards = cards.filter((card) => {
    return selectedFunction === "All" || card.category === selectedFunction;
  });

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4 highlight">Supply Chain & Operations</h1>
      {isAuthenticated && <p>Welcome back, {accounts[0].name}!</p>}
      {/* Dropdown Filter */}
      <div className="mb-4 text-center">
        <label htmlFor="sc-filter" className="form-label fw-bold">
          Select Supply Chain Function:
        </label>
        <select
          id="sc-filter"
          className="form-select w-50 mx-auto"
          onChange={(e) => setSelectedFunction(e.target.value)}
          value={selectedFunction}
        >
          <option value="All">All</option>
          <option value="Plan">Plan</option>
          <option value="Fulfill">Fulfill</option>
          <option value="Source">Source</option>
        </select>
      </div>

      {/* Upload Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h2>SC&O Benchmarks</h2>
          <p>
            The Supply Chain & Operations Benchmarking console provides a
            comprehensive set of KPIs across the SC&O value chain based on data
            integrated from multiple Accenture assets and external data sources.
          </p>
          <button
            className="btn btn-primary me-2"
            disabled={uploading}
            onClick={() => document.getElementById("benchmarkInput").click()}
          >
            {uploading ? "Uploading..." : "Upload Benchmark Inputs"}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => alert("Download Template1_Benchmark Inputs")}
          >
            Download Template
          </button>
          <input
            type="file"
            id="benchmarkInput"
            accept=".xlsx,.xls"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            aria-label="Upload Benchmark Inputs"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <img
            src="https://placehold.co/300x200/000000/FFFFFF/?text=Logo "
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="row mt-4">
        {filteredCards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="img-fluid mb-2"
                  />
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
                <div className="flip-card-back">
                  <h5>{card.title}</h5>
                  <p>{card.backDescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Go to Tool Button */}
      <div className="text-center mt-5">
        <Link to="/tool" className="btn btn-success btn-lg">
          Go to Tool
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
