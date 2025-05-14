import React from "react";
import { useSelector } from "react-redux";

function ScopeOfImprovementTable({ data = [] }) {
  const tableData = data.map((row) => {
    const clientValue = parseFloat(row.client) || 0;
    const scopeMin = row.q1 - clientValue;
    const scopeMax = row.median - clientValue;

    return {
      kpi: row.name,
      q1: row.q1,
      median: row.median,
      client: clientValue,
      scopeMin: scopeMin.toFixed(2),
      scopeMax: scopeMax.toFixed(2),
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
        {tableData.map((row, idx) => (
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
