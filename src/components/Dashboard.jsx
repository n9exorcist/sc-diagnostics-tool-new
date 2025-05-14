import React, { useState } from "react";
import { Container } from "react-bootstrap";
import UploadMyDiagnostic from "./UploadMyDiagnostic";
import UploadBenchmarkInputs from "./UploadBenchmarkInputs";
import UploadClientKPIInputs from "./UploadClientKPIInputs";
import KPIQuartileChart from "./KPIQuartileChart";
import ScopeOfImprovementTable from "./ScopeOfImprovementTable";
import ReportGenerator from "./ReportGenerator";
import InventoryTurns from "./InventoryTurns";
import SearchBar from "./SearchBar";
import Chat from "./Chat";
import FileUpload from "./FileUpload";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [excelData, setExcelData] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null); // <-- New state
  const [kpiData, setKpiData] = useState([]);

  console.log("KPI Data:", kpiData);

  const handleSendMessage = async (text) => {
    const newMessage = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);

    if (!excelData || !Array.isArray(excelData)) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Bot: I'm ready to help you!" },
        ]);
      }, 500);
      return;
    }

    // ✅ Validate user message
    if (!text || typeof text !== "string" || text.trim().length < 2) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Bot: Please ask a meaningful question." },
      ]);
      return;
    }

    console.log("Sending to API:", {
      message: text,
      excelDataSample: excelData.slice(0, 5),
      excelDataType: typeof excelData,
      isArray: Array.isArray(excelData),
    });

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text, excelData }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      console.error("Error calling AI:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Bot: Sorry, something went wrong. Try again." },
      ]);
    }
  };

  const handleFileUpload = (data, file) => {
    setExcelData(data);
    setUploadedFile(file);

    if (data.length > 1) {
      const headers = data[0]; // ["Function", "KPI", "Units", ..., "Q1", "Q2", "Q3"]

      const kpiRows = data.slice(1).map((row) => {
        const kpiName = row[1]?.trim() || "";
        const client = !isNaN(parseFloat(row[2])) ? parseFloat(row[2]) : null;
        const q1 = !isNaN(parseFloat(row[5])) ? parseFloat(row[5]) : null;
        const median = !isNaN(parseFloat(row[6])) ? parseFloat(row[6]) : null;
        const q3 = !isNaN(parseFloat(row[7])) ? parseFloat(row[7]) : null;

        return {
          name: kpiName,
          client,
          q1,
          median,
          q3,
        };
      });

      // Filter out empty or incomplete rows
      const validKpiRows = kpiRows.filter(
        (row) =>
          row.name && row.q1 !== null && row.median !== null && row.q3 !== null
      );

      setKpiData(validKpiRows); // Save parsed KPI data
    }

    const userMessage = { sender: "user", text: "Uploaded an Excel file." };
    const botMessage = {
      sender: "bot",
      text: `Bot: I received your Excel file with ${data.length} rows. Ask me anything about it!`,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleRemoveFile = () => {
    setExcelData(null);
    setUploadedFile(null);

    // Add user and bot message immediately
    const userMessage = {
      sender: "user",
      text: "Removed the uploaded Excel file.",
    };
    const botMessage = { sender: "bot", text: "Bot: I'm ready to help you!" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">SC Rapid Diagnostics Factory Tool</h1>

      <div className="mb-4">
        <h4>Upload Templates</h4>
        <UploadMyDiagnostic />
        <UploadBenchmarkInputs />
        <UploadClientKPIInputs />
      </div>

      <hr />

      <div className="mb-4">
        <h4>KPI Quartile Plot</h4>
        <KPIQuartileChart data={kpiData} />
      </div>

      <hr />

      <div className="mb-4">
        <h4>Generate Reports</h4>
        <ReportGenerator />
      </div>

      <hr />

      <div className="mb-4">
        {kpiData.length > 0 && (
          <InventoryTurns
            kpi={kpiData.find((d) => d.name === "Inventory Turns") || {}}
          />
        )}
      </div>

      <hr />

      <div className="mb-4">
        <h4>Scope of Improvement</h4>
        <ScopeOfImprovementTable data={kpiData} />
      </div>

      <hr />

      <div className="app">
        <h2>🤖 Search Bot with Excel Upload</h2>
        <Chat messages={messages} />
        <SearchBar onSendMessage={handleSendMessage} />
        <FileUpload onFileUpload={handleFileUpload} />
        {uploadedFile && (
          <div className="uploaded-file">
            <span>📄 Uploaded: {uploadedFile.name}</span>
            <button
              type="button"
              className="remove-button"
              onClick={handleRemoveFile}
              aria-label="Remove file"
            >
              🗑️
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Dashboard;
