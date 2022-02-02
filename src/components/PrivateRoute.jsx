import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return null;
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" />;
};
