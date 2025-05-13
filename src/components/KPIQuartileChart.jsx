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

function KPIQuartileChart() {
  const sampleData = [
    { name: "Inventory Turns", q1: 9.9, median: 6, q3: 4, client: 7 },
    { name: "OTIF", q1: 85, median: 75, q3: 60, client: 70 },
    { name: "Logistics Cost %", q1: 0.9, median: 1.1, q3: 1.5, client: 1.2 },
  ];

  return (
    <BarChart width={800} height={400} data={sampleData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
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
