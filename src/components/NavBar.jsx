import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

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
    <Navbar style={{ backgroundColor: "var(--color-purple-core)" }}>
      <Container>
        <Navbar.Brand style={{ color: "var(--color-white)" }} href="/">
          Supply Chain Tool
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: "var(--color-white)" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/tool" style={{ color: "var(--color-white)" }}>
            Tool
          </Nav.Link>
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
            <Button
              onClick={handleLogin}
              variant="outline-light"
              style={{
                backgroundColor: "var(--color-purple-dark)",
                color: "var(--color-white)",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
