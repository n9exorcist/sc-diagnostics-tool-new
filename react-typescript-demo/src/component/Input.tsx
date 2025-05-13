import React from "react";

// When defining the event handler as a separate function, it's essential to explicitly type the event parameter:

// Typically input elements needs to two props

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

//  The React.ChangeEvent<HTMLInputElement> type is specifically designed for handling change events on input elements.

// const Input = (props: InputProps) - This has been destructed in below line

const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={handleChange}></input>;
};

export default Input;
