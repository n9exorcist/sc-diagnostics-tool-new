import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function LoginButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => {
      console.error(error);
    });
  };

  return <button onClick={handleLogin}>Sign in with Microsoft</button>;
}

export default LoginButton;
