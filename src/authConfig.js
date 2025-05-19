// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: "7432013e-892b-4335-b6ca-0acd84998163", // Application (client) ID
    authority:
      "https://login.microsoftonline.com/e0793d39-0939-496d-b129-198edd916feb", // Directory (tenant) ID
    redirectUri: "http://localhost:3000",
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
