import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../../Home/Doctor/Doctor";
import "./newAppointment.css";
const NewAppointment = () => {
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
    <div className="doctors-wrapper dashboard-doctor">
      <Container>
        <div className="section-title">
          <h2>Select Doctor and Make Appointment</h2>
        </div>
        <Row>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NewAppointment;
