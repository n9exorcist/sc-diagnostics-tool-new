import React, { useState } from "react";
import "../assets/css/StartAssessment.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const StartAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");

  const navigate = useNavigate();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  return (
    <div className="start-assessment container">
      <h2 className="mt-3">Start a New Assessment</h2>

      <div className="header">
        <button
          className="back-button"
          onClick={() => navigate("/launch-assessment")}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
      </div>

      <div className="steps-container">
        {/* Progress Indicator */}
        <div className="step-indicator">
          <span
            className={currentStep >= 1 ? "active" : ""}
            onClick={() => setCurrentStep(1)}
          >
            Request Access
          </span>
          <span
            className={currentStep >= 2 ? "active" : ""}
            onClick={() => setCurrentStep(2)}
          >
            Define Client Name
          </span>
          <span
            className={currentStep >= 3 ? "active" : ""}
            onClick={() => setCurrentStep(3)}
          >
            Define Project Name
          </span>
          <span
            className={currentStep >= 4 ? "active" : ""}
            onClick={() => setCurrentStep(4)}
          >
            Create Assessment Name
          </span>
        </div>

        {/* Steps Content */}
        {currentStep === 1 && (
          <div>
            <h3>Request Access (1 of 4)</h3>
            <p>Click the button below to request access.</p>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h3>Define Client Name (2 of 4)</h3>
            <input
              type="text"
              placeholder="Enter Client Name"
              value={clientName}
              onChange={handleClientNameChange}
            />
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h3>Define Project Name (3 of 4)</h3>
            <input
              type="text"
              placeholder="Enter Project Name"
              value={projectName}
              onChange={handleProjectNameChange}
            />
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h3>Create an Assessment Name (4 of 4)</h3>
            <p>
              Assessment Name:{" "}
              <strong>
                {`${clientName} ${projectName} SC Rapid Diagnostics`}
              </strong>
            </p>
            <button onClick={handlePrevStep}>Previous</button>
            <button onClick={() => alert("Assessment Created!")}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartAssessment;
