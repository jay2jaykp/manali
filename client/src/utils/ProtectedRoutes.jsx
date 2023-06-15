/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const ProtectedRoute = ({ redirectPath = '/' }) => {
    const {user} = useContext(UserContext)
    if (user.role !== 'admin') {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
  };