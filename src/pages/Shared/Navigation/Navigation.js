import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import diagnosticCenterLogo from "../../../images/diagnostic-center-logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container className="custom-nav py-1">
        <Navbar.Brand as={Link} to="/">
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
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Doctors
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Departments
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            labs
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-in">
            Sign in
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} className="custom-btn" to="/online-appointment">
            Appointment
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
