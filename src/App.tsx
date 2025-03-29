import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landing";
import AuthPage from "./pages/auth";
import { ProtectedRoute } from "./protectedRoutes";
import Dashboard from "./pages/driver-dashboard";

function App() {
  
  return (
   <>
    <Router>
   
      <Routes>
        <Route path="/" element={<LandingPage  />} index/>
        <Route path="/auth" element={<AuthPage  />}/>
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/driver-dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
     
      
    </Router>
   </>
  )
}

export default App
