import React from "react";
import { Name } from "../types/types";

type PersonListProps = {
  names: Name[];
};

// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3 key={name.first}>
            {name.first}, {name.last}
          </h3>
        );
      })}
    </div>
  );
};

export default PersonList;
