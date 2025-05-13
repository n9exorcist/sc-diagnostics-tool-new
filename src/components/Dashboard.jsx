import React from "react";
import { Container } from "react-bootstrap";
import UploadMyDiagnostic from "./UploadMyDiagnostic";
import UploadBenchmarkInputs from "./UploadBenchmarkInputs";
import UploadClientKPIInputs from "./UploadClientKPIInputs";
import KPIQuartileChart from "./KPIQuartileChart";
import ScopeOfImprovementTable from "./ScopeOfImprovementTable";
import ReportGenerator from "./ReportGenerator";
import InventoryTurns from "./InventoryTurns";

function Dashboard() {
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
        <h4>Scope of Improvement</h4>
        <ScopeOfImprovementTable />
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
    </Container>
  );
}

export default Dashboard;
