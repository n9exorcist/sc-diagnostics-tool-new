import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../assets/css/CardDetailPage.css";

const CardDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardType } = useParams(); // Extract cardType from URL

  // Extract the full cards array from location.state
  const cards = location.state?.cards || [];

  // Find the matching card
  const card = cards.find((c) => c.type === cardType);

  if (!card) {
    console.error("No card found for type:", cardType);
    return <div>Card not found</div>;
  }

  return (
    <div className="card-detail-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Card Details */}
      <h2>{card.title}</h2>
      <p>
        <strong>Description:</strong> {card.description}
      </p>

      {/* Steps List */}
      <ul className="card-details-list">
        {card.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>

      {/* File Upload Button */}
      <label htmlFor="excel-upload" className="upload-button">
        Upload Excel File
      </label>
      <input
        id="excel-upload"
        type="file"
        accept=".xlsx,.xls"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default CardDetailPage;
