import React from "react";
type HeadingProps = { children: string };
// we get that children string from the App component suggestions
const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
