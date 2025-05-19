// UploadBenchmarkInputs.jsx
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";

function UploadBenchmarkInputs() {
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);
  // ✅ Safe access to Redux state
  const benchmarkData = useSelector((state) => state.benchmark?.data || []);
  console.log("Benchmark Data:", benchmarkData);

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

      // Merge with existing data to retain descriptions
      const mergedData = parsedData.map((row) => {
        const existingKPI = benchmarkData.find((kpi) => kpi.name === row.KPI);
        return {
          name: row.KPI,
          description:
            existingKPI?.description || row.Description_of_the_KPI || "",
          units: existingKPI?.units || row.Units || "",
          q1: parseFloat(row.Q1),
          median: parseFloat(row.Q2),
          q3: parseFloat(row.Q3),
        };
      });

      dispatch({ type: "SET_BENCHMARK_DATA", payload: mergedData });
      setFileName(file.name);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="mb-3">
      <label>Upload Benchmark Data</label>
      <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
      {fileName && (
        <small className="text-success ms-2">Uploaded: {fileName}</small>
      )}
    </div>
  );
}

export default UploadBenchmarkInputs;
