import React from "react";
import { useState } from "react";
import "./InventoryTurns.css"; // Import your CSS file for styling

const InventoryTurns = ({ kpi = {} }) => {
  // Sample data
  // const [data, setData] = useState({
  //   q1: 9.9,
  //   q2: 6.0,
  //   q3: 4.0,
  //   clientValue: 8.03,
  // });

  const [data, setData] = useState({
    q1: kpi?.q1 ?? 9.9,
    q2: kpi?.median ?? 6.0,
    q3: kpi?.q3 ?? 4.0,
    clientValue: kpi?.client ?? 8.03,
  });

  // Function to calculate the position of the client value
  const getClientPosition = () => {
    const q1 = data.q1 ?? 9.9;
    const q3 = data.q3 ?? 4.0;
    const clientValue = data.clientValue ?? 8.03;

    const totalRange = q1 - q3;
    const clientDiff = clientValue - q3;
    const percentage = (clientDiff / totalRange) * 100;
    return `${percentage}%`;
  };

  return (
    <div className="inventory-turns">
      {/* Title and Unit Information */}
      <div className="header">
        <h3>Inventory Turns - Total</h3>
        <div className="unit-info">
          <span>Sample</span>
        </div>
      </div>

      {/* Horizontal Line with Quartiles */}
      <div className="quartile-line">
        {/* Q1 */}
        <div className="quartile q1">
          <div className="line"></div>
          <div className="label">Q1</div>
          <div className="value">{data.q1}</div>
        </div>

        {/* Q2 */}
        <div className="quartile q2">
          <div className="line"></div>
          <div className="label">Q2</div>
          <div className="value">{data.q2}</div>
        </div>

        {/* Q3 */}
        <div className="quartile q3">
          <div className="line"></div>
          <div className="label">Q3</div>
          <div className="value">{data.q3}</div>
        </div>

        {/* Client Value */}
        <div
          className="client-value"
          style={{
            transform: `translateX(${getClientPosition()})`,
          }}
        >
          <div className="dot"></div>
          <div className="value">Client</div>
          <div className="score">{data.clientValue}</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryTurns;
