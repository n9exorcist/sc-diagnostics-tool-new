import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const KPIScatterPlot = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 80, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xDomain = data.map((d) => d.name);
    const yDomain = [0, d3.max(data, (d) => Math.max(d.q1, d.client))];

    const x = d3
      .scaleBand()
      .domain(xDomain)
      .range([0, width - margin.left - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain(yDomain)
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Draw axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg.append("g").attr("transform", `translate(0,0)`).call(d3.axisLeft(y));

    // Group by KPI and draw dots
    const groups = svg
      .selectAll(".kpi-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", (d) => `kpi-group ${d.name.replace(/\s+/g, "-")}`);

    // Add Q1 dot
    groups
      .append("circle")
      .attr("cx", (d) => x(d.name) + x.bandwidth() / 2)
      .attr("cy", (d) => y(d.q1))
      .attr("r", 6)
      .attr("fill", "#8884d8")
      .attr("opacity", 0.8);

    // Median
    groups
      .append("circle")
      .attr("cx", (d) => x(d.name) + x.bandwidth() / 2)
      .attr("cy", (d) => y(d.median))
      .attr("r", 6)
      .attr("fill", "#82ca9d")
      .attr("opacity", 0.8);

    // Q3
    groups
      .append("circle")
      .attr("cx", (d) => x(d.name) + x.bandwidth() / 2)
      .attr("cy", (d) => y(d.q3))
      .attr("r", 6)
      .attr("fill", "#ffc658")
      .attr("opacity", 0.8);

    // Client value
    groups
      .append("circle")
      .attr("cx", (d) => x(d.name) + x.bandwidth() / 2)
      .attr("cy", (d) => y(d.client))
      .attr("r", 8)
      .attr("fill", "#ff4d4d")
      .attr("stroke", "#333")
      .attr("stroke-width", 2)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("r", 10).attr("fill", "#ff1a1a");
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`${d.name}<br/>Client: ${d.client}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      })
      .on("mouseout", function () {
        d3.select(this).attr("r", 8).attr("fill", "#ff4d4d");
        tooltip.style("opacity", 0);
      });

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("id", "tooltip")
      .style("position", "absolute")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("padding", "8px")
      .style("display", "none")
      .style("pointer-events", "none")
      .style("font-size", "14px")
      .style("z-index", "10");

    // Labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 20)
      .attr("text-anchor", "middle")
      .text("KPI");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -40)
      .attr("text-anchor", "middle")
      .text("Value");

    // Legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - 150}, 0)`);

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 10)
      .attr("r", 6)
      .attr("fill", "#8884d8");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 15)
      .text("Q1")
      .style("font-size", "12px");

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 30)
      .attr("r", 6)
      .attr("fill", "#82ca9d");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 35)
      .text("Median")
      .style("font-size", "12px");

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 50)
      .attr("r", 6)
      .attr("fill", "#ffc658");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 55)
      .text("Q3")
      .style("font-size", "12px");

    legend
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 70)
      .attr("r", 8)
      .attr("fill", "#ff4d4d");
    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 75)
      .text("Client")
      .style("font-size", "12px");
  }, [data]);

  return (
    <div>
      <h4>KPI Performance Scatter Plot</h4>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default KPIScatterPlot;
