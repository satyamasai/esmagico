import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLogin from "./Admin/AdminLogin";
import AdminSignup from "./Admin/AdminSignup";
import Home from "./Home";
import AdminPrivateRoute from "./PrivateRoutes/AdminPrivateRoute";
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
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminPrivateRoute>
            <AdminDashboard />
          </AdminPrivateRoute>
        }
      />
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
