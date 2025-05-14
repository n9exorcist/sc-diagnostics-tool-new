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
        <KPIQuartileChart />
      </div>

      <hr />

      <div className="mb-4">
        <h4>Generate Reports</h4>
        <ReportGenerator />
      </div>

      <hr />

      <div className="mb-4">
        <InventoryTurns />
      </div>

      <hr />

      <div className="mb-4">
        <h4>Scope of Improvement</h4>
        <ScopeOfImprovementTable />
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
