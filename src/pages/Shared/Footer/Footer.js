import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import diagnosticCenterLogo from "../../../images/diagnostic-center-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About Us</h4>
            <img
              className="mb-3 w-75 img-fluid"
              src={diagnosticCenterLogo}
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              consequatur quia eos deserunt dicta commodi inventore repellendus
              rerum consequuntur sint officiis expedita vel laudantium dolorem
              obcaecati maiores aliquid? Nostrum, illo.
              <a className="" href="/">
                learn more
              </a>
            </p>
          </Col>

          <Col className="py-4" xs={12} md={3}>
            <h4>Popular Services</h4>
            <ul>
              <li>
                <a href="/">Our Doctors</a>
              </li>
              <li>
                <a href="/">Test Lab</a>
              </li>
              <li>
                <a href="/">Online Report</a>
              </li>
              <li>
                <a href="/">Child Care</a>
              </li>
              <li>
                <a href="/">Special Department</a>
              </li>
              <li>
                <a href="/">Holyday Services</a>
              </li>
            </ul>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Help And FAQs</a>
              </li>
              <li>
                <a href="/">Popular Services</a>
              </li>
              <li>
                <a href="/">Corporate Support</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col className="py-4 contact-info" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>Green Road, Farmgate, Dhaka, Dhaka Division, Bangladesh</p>

            <h6>PHONE:</h6>

            <a href="tel:+8801718229344">(+88) 01718 000000</a>

            <h6>EMAIL:</h6>

            <a href="mailto:contact@careerguide.international">
              contact@youremail.com
            </a>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Sun - Thu / 10:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row>
          <p className="copyrhgit text-center py-3">
            Copyright &copy; Diagnostic Center, All Rights Reserved. Developed
            By : <a href="/">Jalish Mahmud</a>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
