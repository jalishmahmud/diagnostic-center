import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Departments from "../Departments/Departments";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Departments></Departments>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
