import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import preloader from "../../../images/preloader.gif";

const AllAppointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [isCancel, setIsCancel] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fast-caverns-88455.herokuapp.com/appointments/")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setIsLoading(false);
      });
  }, [isCancel]);
  // delete product
  const handleDeleteAppointment = (id) => {
    const confirm = window.confirm("Are your sure you want to delete Doctor?");
    if (confirm) {
      fetch(`https://fast-caverns-88455.herokuapp.com/appointments/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Doctor deleted");
            setIsCancel(!isCancel);
          } else {
            setIsCancel(false);
          }
        });
    } else {
    }
  };
  return (
    <div>
      <Container>
        <div>
          <div class="recent-grid full-width">
            <div class="projects">
              <div class="card">
                <div class="card-header header-preloader">
                  <h3>All Appointment </h3>
                  {isLoading && (
                    <img
                      width="40px"
                      className="preloader"
                      src={preloader}
                      alt=""
                    />
                  )}

                  <Link
                    className="custom-link-button"
                    to="/dashboard/new-appointment"
                  >
                    New Appointment<span class="las la-arrow-right"></span>
                  </Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>#</td>
                          {/* <td>Picture</td> */}
                          <td>Doctor's Name</td>
                          <td>Patient's Name</td>
                          <td>Payment</td>
                          <td>Date</td>
                          <td>Status</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            {/* <td>
                              <img
                                className="img-fluid"
                                style={{
                                  width: "40px",
                                  display: "block",
                                  margin: "0 auto",
                                  borderRadius: "5px",
                                }}
                                src={doctor.doctorPictureURL}
                                alt=""
                              />
                            </td> */}
                            <td>
                              <p>{appointment.DoctorName}</p>
                              <small>{appointment.educationOrTraining}</small>
                            </td>
                            <td>
                              <p>{appointment.name}</p>
                              <small>Age: {appointment?.age} Year </small>
                            </td>
                            <td>
                              <p>{appointment.paymentStatus}</p>
                            </td>
                            <td>{appointment.date}</td>
                            <td>{appointment.status}</td>
                            <td>
                              <button className="">Pay</button>
                              <button className="">Edit</button>
                              <button
                                onClick={() =>
                                  handleDeleteAppointment(appointment._id)
                                }
                                className=""
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllAppointments;
