import React, { useState } from "react";

type Authuser = {
  username: string;
  email: string;
};

const User = (props: Authuser) => {
  //   const [user, setUser] = useState<null | Authuser>(null);
  const [user, setUser] = useState<null | Authuser>(props);
  // const [user, setUser] = useState<Authuser>({} as Authuser);, This scenario is used when we dont have logged out scenario
  // the first one is specified in <> is called Type of state hook, the second one which is specified in () is called Type Interferance
  // by default, the user is not logged in so we set the state to null
  const handleLogin = () => {
    setUser({
      username: "Vishwas",
      email: "viswas@example.com",
    });
  };
  const hangleLogout = () => {
    setUser(null);
    // once the user logout, we need to set the state to null
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={hangleLogout}>Logout</button>
      <div>Username is {user?.username}</div>
      <div>Email is {user?.email}</div>
    </div>
  );
  //user can be null, that is the reason we are using ?, so we need to always check the obejct
};

export default User;
