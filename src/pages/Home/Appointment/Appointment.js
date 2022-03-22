import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Appointment.css";
const Appointment = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { doctorId } = useParams();
  const { user } = useAuth();
  const [doctor, setDoctor] = useState([]);

  const {
    DoctorName,
    educationOrTraining,
    speciality,
    consultationFee,
    visitingTime,
    doctorPictureURL,
    ChamberName,
  } = doctor;
  useEffect(() => {
    fetch(`https://fast-caverns-88455.herokuapp.com/doctors/${doctorId}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [doctorId]);
  const date = new Date();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = date.toLocaleDateString();
    data.time = date.toLocaleTimeString();
    data.DoctorName = DoctorName;
    data.ChamberName = ChamberName;
    data.consultationFee = consultationFee;
    data.speciality = speciality;
    data.educationOrTraining = educationOrTraining;
    data.paymentStatus = "Unpaid";
    data.status = "Pending";
    fetch("https://fast-caverns-88455.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(true);
          reset();
        }
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="appointment-wrapper">
        <Container>
          <Row>
            <div className="section-title">
              <h2>{DoctorName}</h2>
              <p>{educationOrTraining}</p>
              <h5>{speciality} Specialist</h5>
            </div>
            <Col>
              <div className="single-doctor">
                <div>
                  <img
                    className="img-fluid single-image"
                    src={doctorPictureURL}
                    alt=""
                  />
                  <p>
                    <span> Consultation Fee:</span> {consultationFee} BDT
                  </p>
                  <p>
                    <span>Time:</span> {visitingTime}
                  </p>
                  <p>
                    <span>Chamber Name:</span> {ChamberName}
                  </p>
                  <p className="rating">
                    <span> Rating :</span> 5*
                  </p>
                </div>
                <div>
                  <form
                    className="input-field"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      value={user.displayName}
                      placeholder="Your Name"
                      {...register("name")}
                    />
                    {errors.name && <p>This Filed is required.</p>}
                    <input
                      value={user.email}
                      placeholder="Your Email"
                      {...register("email")}
                    />
                    {errors.email && <p>This Filed is required.</p>}
                    <input placeholder="Your Age" {...register("age")} />
                    {errors.age && <p>This Filed is required.</p>}
                    <input
                      placeholder="Phone Number"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && <p>This Filed is required.</p>}
                    <input placeholder="Address" {...register("address")} />
                    {errors.address && <p>This Filed is required.</p>}

                    <button type="submit"> Submit</button>
                    {isSuccess && (
                      <Alert className="my-3" variant="success">
                        Appointment Success
                      </Alert>
                    )}
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Appointment;
