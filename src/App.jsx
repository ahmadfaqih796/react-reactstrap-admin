import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundpage from "./pages/NotFoundpage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import MerchantListPage from "./pages/merchants/MerchantListPage";
import AdminLayout from "./components/layout/AdminLayout";

function App() {
  const isAuthenticated = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <AdminLayout />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="merchants" element={<MerchantListPage />} />
            {/* <Route path="merchants/:id" element={<MerchantDetailPage />} /> */}
          </Route>

          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
