import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../../images/doctor-1.jpg";
import "./Doctors.css";
const Doctors = () => {
  return (
    <div className="doctors-wrapper">
      <Container>
        <div className="section-title">
          <h2>Our Specialized Doctors</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <Row>
          <Col md={6}>
            <div className="single-doctor">
              <img className="img-fluid" src={doctor1} alt="" />

              <div>
                <h3>Dr. Anamul Hossain</h3>
                <small>MBBS, FCPS, MD (Brain)</small>
                <h5>Neurology specialist</h5>
                <p>
                  <span> Consultation Fee:</span> 700 BDT
                </p>
                <p>
                  <span>Time:</span> Sun - Thu, 7:00 pm - 11:00 pm
                </p>
                <p className="rating">
                  <span> Rating :</span> 5*
                </p>
                <button className="appointment-btn">Appointment</button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single-doctor">
              <img className="img-fluid" src={doctor1} alt="" />

              <div>
                <h3>Dr. Anamul Hossain</h3>
                <small>MBBS, FCPS, MD (Brain)</small>
                <h5>Neurology specialist</h5>
                <p>
                  <span> Consultation Fee:</span> 700 BDT
                </p>
                <p>
                  <span>Time:</span> Sun - Thu, 7:00 pm - 11:00 pm
                </p>
                <p className="rating">
                  <span> Rating :</span> 5*
                </p>
                <button className="appointment-btn">Appointment</button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single-doctor">
              <img className="img-fluid" src={doctor1} alt="" />

              <div>
                <h3>Dr. Anamul Hossain</h3>
                <small>MBBS, FCPS, MD (Brain)</small>
                <h5>Neurology specialist</h5>
                <p>
                  <span> Consultation Fee:</span> 700 BDT
                </p>
                <p>
                  <span>Time:</span> Sun - Thu, 7:00 pm - 11:00 pm
                </p>
                <p className="rating">
                  <span> Rating :</span> 5*
                </p>
                <button className="appointment-btn">Appointment</button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="single-doctor">
              <img className="img-fluid" src={doctor1} alt="" />

              <div>
                <h3>Dr. Anamul Hossain</h3>
                <small>MBBS, FCPS, MD (Brain)</small>
                <h5>Neurology specialist</h5>
                <p>
                  <span> Consultation Fee:</span> 700 BDT
                </p>
                <p>
                  <span>Time:</span> Sun - Thu, 7:00 pm - 11:00 pm
                </p>
                <p className="rating">
                  <span> Rating :</span> 5*
                </p>
                <button className="appointment-btn">Appointment</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
