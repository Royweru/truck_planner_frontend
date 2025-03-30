import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landing";
import AuthPage from "./pages/auth";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./protectedRoutes";
import Dashboard from "./pages/driver-dashboard";
import AboutPage from "./pages/about";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* publlic route */}
          <Route path="/" element={<LandingPage />} index />
          <Route path="/about" element={<AboutPage />}  />
          <Route
            path="/auth"
            element={
              <div>
                <Toaster />
                <AuthPage />
              </div>
            }
          />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/driver-dashboard"
              element={
              <Dashboard />
              }
            />
          </Route>

          {/* Not found  */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <h1 className="text-4xl">Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
