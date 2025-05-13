import React from "react";

function ReportGenerator() {
  const generateWord = () => {
    alert("Generating Word Report...");
    // Use docxtemplater or similar library
  };

  const generatePowerPoint = () => {
    alert("Generating PowerPoint Report...");
    // Use pptxgenjs
  };

  return (
    <div>
      <button className="btn btn-primary me-2" onClick={generateWord}>
        Download Word
      </button>
      <button className="btn btn-success" onClick={generatePowerPoint}>
        Download PowerPoint
      </button>
    </div>
  );
}

export default ReportGenerator;
