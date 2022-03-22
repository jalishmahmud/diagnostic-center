import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const {
    _id,
    DoctorName,
    educationOrTraining,
    speciality,
    consultationFee,
    visitingTime,
    doctorPictureURL,
  } = doctor;
  const navigate = useNavigate();
  const handleAppointmentButton = (id) => {
    navigate(`/appointment/${id}`);
  };
  return (
    <Col md={6}>
      <div className="single-doctor">
        <img className="img-fluid" src={doctorPictureURL} alt="" />

        <div>
          <h3>{DoctorName}</h3>
          <small>{educationOrTraining}</small>
          <h5>{speciality}</h5>
          <p>
            <span> Consultation Fee:</span> {consultationFee} BDT
          </p>
          <p>
            <span>Time:</span> {visitingTime}
          </p>
          <p className="rating">
            <span> Rating :</span> 5*
          </p>
          <button
            onClick={() => handleAppointmentButton(_id)}
            className="appointment-btn"
          >
            Appointment
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Doctor;
