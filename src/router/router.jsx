import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

// Views
import Characters from "../views/Characters/Characters";
import Episodes from "../views/Episodes/Episodes";
import Login from "../views/Login/login";

// Protected route
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  const componentToRender = (
    <Routes>
      <Route path="/" element={<Navigate to="/characters"></Navigate>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/characters"
        element={
          <ProtectedRoute>
            <Characters></Characters>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/episodes"
        element={
          <ProtectedRoute>
            <Episodes></Episodes>
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
  return (
    <BrowserRouter>
      <MainLayout>{componentToRender}</MainLayout>
    </BrowserRouter>
  );
}
