import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";

function UploadClientKPIInputs() {
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      dispatch({ type: "SET_BENCHMARK_DATA", payload: parsedData });
      setFileName(file.name);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="mb-3">
      <label>Upload Benchmark Inputs (Template3_Benchmark Inputs):</label>
      <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
      {fileName && (
        <small className="text-success ms-2">Uploaded: {fileName}</small>
      )}
    </div>
  );
}

export default UploadClientKPIInputs;
