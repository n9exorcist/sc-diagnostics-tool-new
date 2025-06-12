import React from "react";
import "../assets/css/loader.css"; // Import your CSS file for styling

const Loader = ({ message }) => {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loader;
