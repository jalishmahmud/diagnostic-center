import {
  faFlaskVial,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Departments.css";
const Departments = () => {
  return (
    <div className="departments-wrapper">
      <Container>
        <Row>
          <Col md={4}>
            <div className="single-card">
              <span>
                <FontAwesomeIcon icon={faTruckMedical} />
              </span>
              <h3>24/7 Emergency Service</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis distinctio neque quo atque, ipsa eius magni omnis iure
                harum minus?
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="single-card middle">
              <span>
                <FontAwesomeIcon icon={faFlaskVial} />
              </span>
              <h3>Fastest Lab Test Facilities </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis distinctio neque quo atque, ipsa eius magni omnis iure
                harum minus?
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="single-card">
              <span>
                <FontAwesomeIcon icon={faUserDoctor} />
              </span>
              <h3> Specialized Doctors consultation</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis distinctio neque quo atque, ipsa eius magni omnis iure
                harum minus?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Departments;
