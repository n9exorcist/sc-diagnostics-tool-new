import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./component/Greet";
import Person from "./component/Person";
import PersonList from "./component/PersonList";
import Status from "./component/Status";
import Heading from "./component/Heading";
import Oscar from "./component/Oscar";
import Button from "./component/Button";
import Input from "./component/Input";
import Container from "./component/Container";
import LoggedIn from "./component/state/LoggedIn";
import User from "./component/state/User";
import Counter from "./component/state/Counter";
import { ThemecontextProvider } from "./component/context/ThemeContext";
import Box from "./component/context/Box";
//Step4: importing the below two files in here
import { UserContextProvider } from "./component/context/userContext";
import Usercon from "./component/context/user";

function App() {
  const personName = {
    first: "James",
    last: "Bond",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Cindy", last: "Crawford" },
    { first: "Tom", last: "Cruise" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet name="Greet" isLoggedIn={true}></Greet>
        <Person name={personName}></Person>
        <PersonList names={nameList}></PersonList>
        <Status status="success"></Status>
        <Heading>Placeholder Text</Heading>
        <Oscar>
          <Heading>Oscar goes to di caprio</Heading>
        </Oscar>
        <ThemecontextProvider>
          <Box></Box>
        </ThemecontextProvider>
        {/* <Button
          handleClick={() => {
            console.log("button clicked");
          }}
        ></Button> */}
        <Button
          handleClick={(event, id) => {
            console.log("Button clicked", event, id);
          }}
        ></Button>
        <Input value="" handleChange={(event) => console.log(event)}></Input>
        <Container
          styles={{ border: "1px solid black", padding: "1rem" }}
        ></Container>
        <LoggedIn></LoggedIn>
        <User
          username="default user name coming from app component"
          email="default email name coming from app component"
        ></User>
        <Counter />
        {/* Step5: Use the provider here*/}
        <UserContextProvider>
          <Usercon />
        </UserContextProvider>
      </header>
    </div>
  );
}

export default App;
