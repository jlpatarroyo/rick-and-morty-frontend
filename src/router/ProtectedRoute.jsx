import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../api/authService";

export default function ProtectedRoute({ children }) {
  const [user] = useAuthState(auth);

  return user ? children : <Navigate to="/login"></Navigate>;
}
