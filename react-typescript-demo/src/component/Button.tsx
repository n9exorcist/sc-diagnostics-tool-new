import React from "react";
type ButtonProps = {
  // handleClick: () => void;

  // when event clicked on the handleClick

  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );

  // accept click event as a prop and pass it on to HTML element
};

export default Button;
