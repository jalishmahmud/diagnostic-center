import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import diagnosticCenterLogo from "../../../images/diagnostic-center-logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="custom-nav py-1">
        <Navbar.Brand href="/">
          <img
            className="img-fluid"
            style={{ maxWidth: "200px" }}
            src={diagnosticCenterLogo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Text className="welcome-user"></Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end menu-items">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/services">Doctors</Nav.Link>
          <Nav.Link href="/contact">Lab</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>

          <Nav.Link as={Button} className="custom-btn" href="/login">
            Apply Online
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
