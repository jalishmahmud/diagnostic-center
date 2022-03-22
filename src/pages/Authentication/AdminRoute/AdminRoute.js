import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import preloader from "../../../images/preloader.gif";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <img src={preloader} alt="" />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} />;
};

export default AdminRoute;
