import React from "react";
import { useMsal } from "@azure/msal-react";

function ProfileContent() {
  const { accounts } = useMsal();
  const account = accounts[0];

  return (
    <div>
      <h2>Welcome, {account.name}</h2>
      <p>Email: {account.username}</p>
    </div>
  );
}

export default ProfileContent;
