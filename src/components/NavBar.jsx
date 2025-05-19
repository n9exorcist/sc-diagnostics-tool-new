import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => console.log(e));
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Supply Chain Tool</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/tool">Tool</Nav.Link>
        </Nav>
        <div className="d-flex">
          {isAuthenticated ? (
            <>
              <span className="text-white me-3">Hi, {accounts[0].name}</span>
              <Button onClick={handleLogout} variant="outline-light">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={handleLogin} variant="outline-light">
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
