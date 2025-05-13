import React from "react";
import { useSelector } from "react-redux";

function ScopeOfImprovementTable() {
  const benchmarkData = useSelector((state) => state.benchmarkData);
  const clientKPIData = useSelector((state) => state.clientKPIData);

  // Dummy calculation logic
  const improvementData = benchmarkData.map((item, idx) => {
    const clientValue = clientKPIData[idx]?.value || 0;
    const improvementScopeMin = item.Q1 - clientValue;
    const improvementScopeMax = item.Median - clientValue;

    return {
      kpi: item.KPI,
      q1: item.Q1,
      median: item.Median,
      client: clientValue,
      scopeMin: improvementScopeMin.toFixed(2),
      scopeMax: improvementScopeMax.toFixed(2),
    };
  });

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>KPI</th>
          <th>Q1</th>
          <th>Median</th>
          <th>Client</th>
          <th>Scope Min</th>
          <th>Scope Max</th>
        </tr>
      </thead>
      <tbody>
        {improvementData.map((row, idx) => (
          <tr key={idx}>
            <td>{row.kpi}</td>
            <td>{row.q1}</td>
            <td>{row.median}</td>
            <td>{row.client}</td>
            <td>{row.scopeMin}</td>
            <td>{row.scopeMax}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScopeOfImprovementTable;
