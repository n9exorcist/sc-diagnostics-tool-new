import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import D3KPIBarChart from "./D3KPIBarChart";
import KPIScatterPlot from "./KPIScatterPlot";
import KPIScoreRadarChart from "./KPIScoreRadarChart";
import "./Dashboard.css"; // Import your CSS file for styling
import InsightPanel from "./InsightPanel"; // Import the new InsightPanel component

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [excelData, setExcelData] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null); // <-- New state
  const [kpiData, setKpiData] = useState([]);
  const [detailedInsights, setDetailedInsights] = useState([]);
  const [summarizedInsights, setSummarizedInsights] = useState([]);

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
        body: JSON.stringify({
          message: text,
          excelData: excelData.map((row) =>
            row.map((cell) => String(cell || ""))
          ),
        }),
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

      // Generate insights
      const detailedInsights = kpiRows.map((kpi) => {
        return `KPI: ${kpi.name}, Client Value: ${kpi.client}, Q1: ${kpi.q1}, Median: ${kpi.median}, Q3: ${kpi.q3}`;
      });

      const calculateAverage = (kpiRows, key) => {
        const values = kpiRows
          .filter((kpi) => !isNaN(kpi[key]))
          .map((kpi) => kpi[key]);
        const sum = values.reduce((acc, val) => acc + val, 0);
        return values.length > 0 ? (sum / values.length).toFixed(2) : 0;
      };

      const summarizedInsights = [
        `Total KPIs: ${kpiRows.length}`,
        `Average Client Value: ${calculateAverage(kpiRows, "client")}`,
        `Average Q1: ${calculateAverage(kpiRows, "q1")}`,
        `Average Median: ${calculateAverage(kpiRows, "median")}`,
        `Average Q3: ${calculateAverage(kpiRows, "q3")}`,
      ];

      setDetailedInsights(detailedInsights);
      setSummarizedInsights(summarizedInsights);
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
    <Container fluid className="mt-5 p-4">
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
        {/* <KPIQuartileChart data={kpiData} /> */}
        {kpiData.length > 0 && <D3KPIBarChart data={kpiData} />}
        <KPIScatterPlot data={kpiData} />
        <KPIScoreRadarChart kpiData={kpiData} />
      </div>

      <hr />

      <Row className="mb-4">
        {kpiData.length > 0 && (
          <InventoryTurns
            kpi={kpiData.find((d) => d.name === "Inventory Turns") || {}}
          />
        )}
      </Row>

      <hr />

      <Row className="mb-4">
        <h4>Scope of Improvement</h4>
        <ScopeOfImprovementTable data={kpiData} />
      </Row>

      <hr />

      <Row className="mb-4">
        <h4>Generate Reports</h4>
        <ReportGenerator />
      </Row>

      {/* Main Content Split: Insights + Chat */}
      <Row className="app mt-4 align-items-start">
        {/* Left Side: Detailed + Summarized Insights */}
        <Col md={4} className="insights-container pe-4">
          <div className="mb-4">
            <InsightPanel
              detailedInsights={detailedInsights}
              summarizedInsights={summarizedInsights}
            />
          </div>
        </Col>

        {/* Right Side: Chatbot Interface */}
        <Col md={8} className="chat-container ps-4 border-start">
          <h2>🤖 Search Bot with Excel Upload</h2>

          {/* Chat Messages */}
          <Chat messages={messages} />

          {/* Search Bar */}
          <SearchBar onSendMessage={handleSendMessage} />

          {/* File Upload */}
          <FileUpload onFileUpload={handleFileUpload} />

          {/* Uploaded File Info */}
          {uploadedFile && (
            <div className="uploaded-file mt-2">
              <span>📄 Uploaded: {uploadedFile.name}</span>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger ms-2"
                onClick={handleRemoveFile}
                aria-label="Remove file"
              >
                🗑️
              </button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
