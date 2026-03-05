import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TechnicianRequests from "./pages/TechnicianRequests";
import TechnicianBookings from "./pages/TechnicianBookings";
import TechnicianEarnings from "./pages/TechnicianEarnings";
import TechnicianRatings from "./pages/TechnicianRatings";
import TechnicianProfile from "./pages/TechnicianProfile";
import ServiceProviders from "./pages/ServiceProviders";
function App() {
  return (
    <BrowserRouter basename="/Fixify">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
       

<Route path="/technician/requests" element={<TechnicianRequests/>} />
<Route path="/technician/bookings" element={<TechnicianBookings/>} />
<Route path="/technician/earnings" element={<TechnicianEarnings/>} />
<Route path="/technician/ratings" element={<TechnicianRatings/>} />
<Route path="/technician/profile" element={<TechnicianProfile/>} />

<Route path="/ServiceProviders" element={<ServiceProviders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;