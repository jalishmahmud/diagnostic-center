import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import preloader from "../../../images/preloader.gif";
import "./AllDoctors.css";
const AllDoctors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isCancel, setIsCancel] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fast-caverns-88455.herokuapp.com/doctors/")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setIsLoading(false);
      });
  }, [isCancel]);
  // delete product
  const handleDeleteDoctor = (id) => {
    const confirm = window.confirm("Are your sure you want to delete Doctor?");
    if (confirm) {
      fetch(`https://fast-caverns-88455.herokuapp.com/doctors/${id}`, {
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
                  <h3>All Doctors </h3>
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
                    to="/dashboard/add-new-doctor"
                  >
                    Add New <span class="las la-arrow-right"></span>
                  </Link>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>#</td>
                          {/* <td>Picture</td> */}
                          <td>Doctors Name</td>
                          <td>Speciality</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {doctors.map((doctor, index) => (
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
                              <p>{doctor.DoctorName}</p>
                              <small>{doctor.educationOrTraining}</small>
                            </td>
                            <td>{doctor.speciality}</td>
                            <td>
                              <button className="">Edit</button>
                              <button
                                onClick={() => handleDeleteDoctor(doctor._id)}
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

export default AllDoctors;
