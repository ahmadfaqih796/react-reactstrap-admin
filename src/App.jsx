import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import AdminLayout from "./components/layout/AdminLayout";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import MerchantVisitReturnPage from "./pages/merchant-visit/MerchantVisitReturnPage";
import MerchantListPage from "./pages/merchants/MerchantListPage";
import MerchantReturnPage from "./pages/merchants/MerchantReturnPage";
import NotFoundpage from "./pages/NotFoundpage";
import { PageProvider } from "./contexts/PageContext";

function App() {
  const isAuthenticated = true;

  return (
    <>
      <PageProvider>
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
              <Route path="merchants/all" element={<MerchantListPage />} />
              <Route path="merchants/return" element={<MerchantReturnPage />} />
              <Route
                path="merchants-visit/return"
                element={<MerchantVisitReturnPage />}
              />
              {/* <Route path="merchants/:id" element={<MerchantDetailPage />} /> */}
            </Route>

            <Route path="*" element={<NotFoundpage />} />
          </Routes>
        </Router>
      </PageProvider>
    </>
  );
}

export default App;
