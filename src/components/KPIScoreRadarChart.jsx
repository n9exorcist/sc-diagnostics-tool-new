import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const KPIScoreRadarChart = ({ kpiData }) => {
  if (!kpiData || kpiData.length === 0) {
    return <div>No KPI data available</div>;
  }

  // Format data for radar chart
  const radarData = kpiData.map((item) => ({
    subject: item.name,
    client: item.client,
    q1: item.q1,
    median: item.median,
    q3: item.q3,
  }));

  const maxValue = Math.max(
    ...kpiData.flatMap((item) => [item.client, item.q1, item.median, item.q3])
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h4>KPI Performance Radar Chart</h4>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={180}
        width={600}
        height={500}
        data={radarData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#666" }} />
        <PolarRadiusAxis angle={90} domain={[0, maxValue]} />

        <Radar
          name="Client"
          dataKey="client"
          stroke="#ff4d4d"
          fill="#ff4d4d"
          fillOpacity={0.2}
        />
        <Radar
          name="Q1"
          dataKey="q1"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.1}
        />
        <Radar
          name="Median"
          dataKey="median"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.1}
        />
        <Radar
          name="Q3"
          dataKey="q3"
          stroke="#ffc658"
          fill="#ffc658"
          fillOpacity={0.1}
        />

        <Tooltip />
      </RadarChart>
    </div>
  );
};

export default KPIScoreRadarChart;
