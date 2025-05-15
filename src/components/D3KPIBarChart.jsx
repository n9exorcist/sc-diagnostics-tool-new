import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3KPIBarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !Array.isArray(data) || data.length === 0) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 700;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 50, left: 100 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width - margin.left - margin.right])
      .padding(0.2);

    const x1 = d3
      .scaleBand()
      .domain(["Client", "Q1", "Median", "Q3"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => Math.max(d.client, d.q1, d.median, d.q3)),
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3
      .scaleOrdinal()
      .domain(["Client", "Q1", "Median", "Q3"])
      .range(["#ff4d4d", "#8884d8", "#82ca9d", "#ffc658"]);

    const xAxis = d3.axisBottom(x0);
    const yAxis = d3.axisLeft(y).tickFormat(d3.format(".2s"));

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg.append("g").attr("transform", `translate(0,0)`).call(yAxis);

    const group = svg
      .selectAll(".group")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${x0(d.name)},0)`);

    group
      .selectAll("rect")
      .data((d) =>
        ["client", "q1", "median", "q3"].map((key) => ({ key, value: d[key] }))
      )
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.key))
      .attr("y", (d) => y(d.value))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => y(0) - y(d.value))
      .attr("fill", (d) => color(d.key));

    // Legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom + 10})`)
      .selectAll(".legend")
      .data(color.domain().slice())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${i * 100},0)`);

    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", color);

    legend
      .append("text")
      .attr("x", 20)
      .attr("y", 12)
      .text((d) => d);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default D3KPIBarChart;
