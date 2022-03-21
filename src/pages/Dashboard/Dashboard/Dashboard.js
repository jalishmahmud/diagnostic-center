import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import diagnosticCenertLogo from "../../../images/diagnostic-center-logo.png";
import "./Dashboard.css";
const Dashboard = () => {
  const [activeClass, setActiveClass] = useState("Dashboard");
  const { user, logOut, admin } = useAuth();

  const handleActiveClass = (menuName) => {
    setActiveClass(menuName);
  };

  return (
    <div className="dashboard">
      <input type="checkbox" id="nav-toggle" />
      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span class="lab la-accusoft"></span>
            <span>
              <img width="200px" src={diagnosticCenertLogo} alt="" />
            </span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li>
              <Link
                to="/dashboard"
                class={activeClass === "Dashboard" ? "active" : ""}
                onClick={() => handleActiveClass("Dashboard")}
              >
                <span class="las la-igloo"></span> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/new-appointment"
                class={activeClass === "newAppointment" ? "active" : ""}
                onClick={() => handleActiveClass("newAppointment")}
              >
                <span class="las la-users"></span> <span>New Appointment</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-appointments"
                class={activeClass === "allAppointments" ? "active" : ""}
                onClick={() => handleActiveClass("allAppointments")}
              >
                <span class="las la-users"></span> <span>All Appointments</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/add-new-doctor"
                class={activeClass === "addNewDoctor" ? "active" : ""}
                onClick={() => handleActiveClass("addNewDoctor")}
              >
                <span class="las la-clipboard-list"></span>
                <span>Add New Doctor</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-doctors"
                class={activeClass === "allDoctors" ? "active" : ""}
                onClick={() => handleActiveClass("allDoctors")}
              >
                <span class="las la-shopping-bag"></span>{" "}
                <span>All Doctors</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/add-testimonial"
                class={activeClass === "addTestimonial" ? "active" : ""}
                onClick={() => handleActiveClass("addTestimonial")}
              >
                <span class="las la-receipt"></span>{" "}
                <span>Add Testimonial</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-testimonials"
                class={activeClass === "allTestimonials" ? "active" : ""}
                onClick={() => handleActiveClass("allTestimonials")}
              >
                <span class="las la-clipboard-list"></span>{" "}
                <span>All Testimonials</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-doctors-rating"
                class={activeClass === "allDoctorsRating" ? "active" : ""}
                onClick={() => handleActiveClass("allDoctorsRating")}
              >
                <span class="las la-clipboard-list"></span>{" "}
                <span>All Doctor's Rating</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/make-admin"
                class={activeClass === "makeAdmin" ? "active" : ""}
                onClick={() => handleActiveClass("makeAdmin")}
              >
                <span class="las la-user-circle"></span> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span class="las la-home"></span> <span>Back To Home</span>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logOut}>
                <span class="las la-sign-out-alt"></span> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
            Dashboard
          </h2>
          <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>
          <div class="user-wrapper">
            <img src={user.photoURL} alt="" width="30px" height="30px" />
            <div>
              <h4>{user && user.displayName}</h4>
              {admin ? <small>Role: Admin</small> : <small>Role: Client</small>}
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
