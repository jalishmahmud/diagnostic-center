import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import About from "./pages/About/About";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./pages/Authentication/Register/Register";
import SignIn from "./pages/Authentication/SignIn/SignIn";
import Contact from "./pages/Contact/Contact";
import AddNewDoctor from "./pages/Dashboard/AddNewDoctor/AddNewDoctor";
import AddTestimonial from "./pages/Dashboard/AddTestimonial/AddTestimonial";
import AllAppointments from "./pages/Dashboard/AllAppointments/AllAppointments";
import AllDoctors from "./pages/Dashboard/AllDoctors/AllDoctors";
import AllDoctorsRating from "./pages/Dashboard/AllDoctorsRating/AllDoctorsRating";
import AllTestimonials from "./pages/Dashboard/AllTestimonials/AllTestimonials";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import NewAppointment from "./pages/Dashboard/NewAppointment/NewAppointment";
import Appointment from "./pages/Home/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/appointment/:doctorId"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/new-appointment"
              element={
                <PrivateRoute>
                  <NewAppointment />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/all-appointments"
              element={
                <PrivateRoute>
                  <AllAppointments />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/add-new-doctor"
              element={
                <PrivateRoute>
                  <AddNewDoctor />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/all-doctors"
              element={
                <PrivateRoute>
                  <AllDoctors />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/add-testimonial"
              element={
                <PrivateRoute>
                  <AddTestimonial />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/all-testimonials"
              element={
                <PrivateRoute>
                  <AllTestimonials />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/all-doctors-rating"
              element={
                <PrivateRoute>
                  <AllDoctorsRating />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/make-admin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
