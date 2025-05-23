// components/UploadClientKPIInputs.jsx
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { setClientData } from "../slices/clientSlice";

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

      // Format client data
      const cleanedClientData = parsedData.map((row) => ({
        name: row.KPI,
        client: parseFloat(row.Value),
        description: row.Description_of_the_KPI,
        units: row.Units,
      }));

      // Dispatch to Redux
      dispatch(setClientData(cleanedClientData));
      setFileName(file.name);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="mb-3">
      <label>Upload Client KPI Inputs (Template2)</label>
      <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
      {fileName && (
        <small className="text-success ms-2">Uploaded: {fileName}</small>
      )}
    </div>
  );
}

export default UploadClientKPIInputs;
