import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

function MainComponent({ calculateTable }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log("Print Table");
    setRows(calculateTable(3));
  }, [calculateTable]);

  return rows.map((row, index) => {
    return <p key={index}>{row} </p>;
  });
}

export default MainComponent;
