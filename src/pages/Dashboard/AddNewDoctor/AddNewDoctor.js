import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import preloader from "../../../images/preloader.gif";
import "./AddNewDoctor.css";
const AddNewDoctor = () => {
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const date = new Date();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    data.date = date.toLocaleDateString();
    data.adminEmail = user.email;
    fetch("http://localhost:4000/doctors", {
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
          setIsLoading(false);
          reset();
        }
      });
  };
  return (
    <div>
      <Container>
        <div>
          <div class="recent-grid">
            <div class="projects">
              <div class="card">
                <div class="card-header header-preloader">
                  <h3>Add New Doctor </h3>
                  {isLoading && (
                    <img
                      width="40px"
                      className="preloader"
                      src={preloader}
                      alt=""
                    />
                  )}
                  <button>
                    See all <span class="las la-arrow-right"></span>
                  </button>
                </div>
                <div class="card-body">
                  <form
                    className="input-field"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      placeholder="Doctor Name"
                      {...register("DoctorName")}
                    />
                    {errors.DoctorName && <p>This Filed is required.</p>}
                    <input
                      placeholder="Education or Training"
                      {...register("educationOrTraining")}
                    />
                    {errors.educationOrTraining && (
                      <p>This Filed is required.</p>
                    )}
                    <input
                      placeholder="Speciality"
                      {...register("speciality")}
                    />
                    {errors.speciality && <p>This Filed is required.</p>}
                    <input
                      placeholder="Consultation Fee"
                      {...register("consultationFee")}
                    />
                    {errors.consultationFee && <p>This Filed is required.</p>}
                    <input
                      placeholder="Visiting Time"
                      {...register("visitingTime")}
                    />

                    {errors.visitingTime && <p>This Filed is required.</p>}
                    <input
                      placeholder="Chamber Name"
                      {...register("ChamberName")}
                    />
                    {errors.ChamberName && <p>This Filed is required.</p>}
                    <input
                      placeholder="Doctor Picture URL"
                      {...register("doctorPictureURL")}
                    />
                    <br />
                    <button type="submit"> Submit</button>
                    {isSuccess && (
                      <Alert className="my-3" variant="success">
                        Doctor Successfully Added
                      </Alert>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddNewDoctor;
