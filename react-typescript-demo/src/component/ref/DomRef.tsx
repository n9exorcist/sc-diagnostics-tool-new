import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  // If you sure the input elemenet is not null, then use null!
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef}></input>
    </div>
  );
};

export default DomRef;
