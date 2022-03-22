import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import preloader from "../../../images/preloader.gif";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-item-center mt-5">
        <img src={preloader} alt="" />
      </div>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateRoute;
