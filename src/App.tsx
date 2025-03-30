import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landing";
import AuthPage from "./pages/auth";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./protectedRoutes";
import Dashboard from "./pages/driver-dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} index />
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
                <div>
                  <Toaster />
                  <Dashboard />
                </div>
              }
            />
          </Route>

          {/* Not found routes */}
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
