import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../../images/hero-image.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="hero-wrapper">
      <Container>
        <Row>
          <Col md={7} className="hero-text">
            <h2>
              Welcome to <br />
              Diagnostic Center
            </h2>
            <h3>
              We Provide{" "}
              <span>
                {" "}
                <Typewriter
                  words={[
                    "24/7 Emergency Service",
                    "Home Doctor",
                    "Pediatric Service",
                    "Specialized Doctors",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </Col>
          <Col md={5}>
            <img className="img-fluid" src={heroImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
