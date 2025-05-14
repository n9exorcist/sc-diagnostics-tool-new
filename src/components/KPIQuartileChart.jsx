import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function KPIQuartileChart({ data }) {
  // const sampleData = [
  //   { name: "Inventory Turns", q1: 9.9, median: 6, q3: 4, client: 7 },
  //   { name: "OTIF", q1: 85, median: 75, q3: 60, client: 70 },
  //   { name: "Logistics Cost %", q1: 0.9, median: 1.1, q3: 1.5, client: 1.2 },
  // ];

  if (!data || data.length === 0) {
    return <div>No KPI data available.</div>;
  }

  // Filter out rows with no numeric data
  const validData = data.filter(
    (item) =>
      item.name &&
      !isNaN(item.q1) &&
      !isNaN(item.median) &&
      !isNaN(item.q3) &&
      !isNaN(item.client)
  );

  if (validData.length === 0) {
    return <div>All values are non-numeric. Please upload valid KPI data.</div>;
  }

  return (
    <BarChart width={800} height={400} data={validData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" /> {/* Define categories using 'name' */}
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="q1" fill="#8884d8" />
      <Bar dataKey="median" fill="#82ca9d" />
      <Bar dataKey="q3" fill="#ffc658" />
      <Bar dataKey="client" fill="#ff4d4d" />
    </BarChart>
  );
}

export default KPIQuartileChart;
