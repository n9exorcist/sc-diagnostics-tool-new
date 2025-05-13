import React from "react";
type OscarProps = { children: React.ReactNode };
// when we are passing heading oscar within in header
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
