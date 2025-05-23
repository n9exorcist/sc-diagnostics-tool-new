// components/InventoryTurns.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getClientPosition } from "../utils/kpiUtils";
import "./InventoryTurns.css";

const InventoryTurns = () => {
  // Get benchmark and client data from Redux
  const benchmarkData = useSelector((state) =>
    state.benchmark?.data.find((kpi) => kpi.name === "Inventory Turns")
  );

  console.log("Benchmark Data:", benchmarkData);

  const clientData = useSelector((state) =>
    state.client?.data.find((kpi) => kpi.name === "Inventory Turns")
  );

  console.log("Client Data:", clientData);

  const [data, setData] = useState({
    name: "Inventory Turns",
    description: benchmarkData?.description || "",
    units: benchmarkData?.units || "days",
    q1: benchmarkData?.q1 ?? 9.9,
    median: benchmarkData?.median ?? 6.0,
    q3: benchmarkData?.q3 ?? 4.0,
    client: clientData?.client ?? NaN,
  });

  const [override, setOverride] = useState("");

  // ✅ Update local state when Redux changes
  useEffect(() => {
    if (benchmarkData || clientData) {
      setData((prev) => ({
        ...prev,
        name: benchmarkData?.name || prev.name,
        description: benchmarkData?.description || prev.description,
        units: benchmarkData?.units || prev.units,
        q1: benchmarkData?.q1 ?? prev.q1,
        median: benchmarkData?.median ?? prev.median,
        q3: benchmarkData?.q3 ?? prev.q3,
        client: clientData?.client ?? NaN,
      }));
    }
  }, [benchmarkData, clientData]);

  // Calculate client position and improvement scope
  const { position, insight, improvementScope } = getClientPosition(
    data.client,
    data.q1,
    data.median,
    data.q3
  );

  const getClientPositionPercentage = () => {
    const q1 = data.q1 ?? 9.9;
    const q3 = data.q3 ?? 4.0;
    const clientValue = data.client ?? 8.03;

    const totalRange = q1 - q3;
    const clientDiff = clientValue - q3;
    const percentage = Math.min(
      100,
      Math.max(0, (clientDiff / totalRange) * 100)
    );
    return `${percentage}%`;
  };

  return (
    <div className="inventory-turns section">
      {/* Header */}
      <div className="header">
        <h3>{data.name}</h3>
        <div className="unit-info">
          <span>{data.units}</span>
        </div>
      </div>

      {/* Quartile Line */}
      <div className="quartile-line">
        <div className="quartile q1" title={`Q1 Benchmark: ${data.q1}`}>
          <div className="line"></div>
          <div className="label">Q1</div>
          <div className="value">{data.q1}</div>
        </div>

        <div className="quartile q2" title={`Median: ${data.median}`}>
          <div className="line"></div>
          <div className="label">Median</div>
          <div className="value">{data.median}</div>
        </div>

        <div className="quartile q3" title={`Q3 Benchmark: ${data.q3}`}>
          <div className="line"></div>
          <div className="label">Q3</div>
          <div className="value">{data.q3}</div>
        </div>

        {/* Client Value Dot */}
        <div
          className={`client-value ${position.toLowerCase().replace(" ", "-")}`}
          style={{ left: getClientPositionPercentage() }}
        >
          <div className="dot"></div>
          <div className="value">Client</div>
          <div className="score">
            {Number.isFinite(data.client)
              ? data.client.toFixed(2)
              : "⚠️ Missing"}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="insights mt-4">
        <p>
          <strong>Status:</strong> {position}
        </p>
        <p>
          <strong>Insight:</strong> {insight}
        </p>
        <p>
          <strong>Improvement Scope:</strong>{" "}
          {override || improvementScope || "No range available"}
        </p>
      </div>

      {/* Manual Override */}
      <div className="manual-override mt-3">
        <label htmlFor="override-input">Override Improvement Range:</label>
        <input
          id="override-input"
          type="text"
          placeholder={
            improvementScope || "Enter custom range (e.g., 1.2 to 1.5)"
          }
          value={override}
          onChange={(e) => setOverride(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InventoryTurns;
