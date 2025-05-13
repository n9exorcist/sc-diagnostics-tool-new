import React from "react";
import * as XLSX from "xlsx";

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    if (!e || !e.target || !e.target.files) return;

    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith(".xlsx") && !fileName.endsWith(".xls")) {
      alert("Please upload only Excel files (.xlsx or .xls)");
      return;
    }

    const reader = new FileReader();

    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result;
        const workbook = XLSX.read(bstr, { type: "binary" });

        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];

        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        onFileUpload(data, file); // Pass both data and file
        e.target.value = null; // Reset input
      } catch (err) {
        console.error("Error parsing Excel file:", err);
        alert("Failed to parse Excel file.");
      }
    };

    reader.onerror = () => {
      alert("Error reading file");
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="file-upload">
      <label>
        Upload Excel:
        <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default FileUpload;
