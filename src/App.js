import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
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
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />}></Route>
            <Route path="/dashboard" element={<DashboardHome />}></Route>
            <Route
              path="/dashboard/new-appointment"
              element={<NewAppointment />}
            ></Route>
            <Route
              path="/dashboard/all-appointments"
              element={<AllAppointments />}
            ></Route>
            <Route
              path="/dashboard/add-new-doctor"
              element={<AddNewDoctor />}
            ></Route>
            <Route
              path="/dashboard/all-doctors"
              element={<AllDoctors />}
            ></Route>
            <Route
              path="/dashboard/add-testimonial"
              element={<AddTestimonial />}
            ></Route>
            <Route
              path="/dashboard/all-testimonials"
              element={<AllTestimonials />}
            ></Route>
            <Route
              path="/dashboard/all-doctors-rating"
              element={<AllDoctorsRating />}
            ></Route>
            <Route path="/dashboard/make-admin" element={<MakeAdmin />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
