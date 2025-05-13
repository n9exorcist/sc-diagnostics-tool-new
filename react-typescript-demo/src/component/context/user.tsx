import React, { useContext } from "react";
import { UserContext } from "./userContext";

//Future values are set inside a component

const Usercon = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "vishwas",
      email: "viswas@exampple.com",
    });
  };
  const hangleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={hangleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>Email is {userContext.user?.email}</div>
    </div>
  );
};

export default Usercon;
