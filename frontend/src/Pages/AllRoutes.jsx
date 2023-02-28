import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserPrivateRoute from "./PrivateRoutes/UserPrivateRoute";
import UserDashboard from "./User/UserDashboard";
import UserLogin from "./User/UserLogin";
import UserSignup from "./User/UserSignup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route
        path="/user/dashboard"
        element={
          <UserPrivateRoute>
            <UserDashboard />
          </UserPrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
