import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
const Doctors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fast-caverns-88455.herokuapp.com/doctors/")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="doctors-wrapper">
      <Container>
        <div className="section-title">
          <h2>Our Specialized Doctors</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <Row>
          {doctors.slice(0, 4).map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
