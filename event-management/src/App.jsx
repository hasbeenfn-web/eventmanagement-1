import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Calendar from "./pages/Calendar";
import Success from "./pages/Success";
import Ticket from "./pages/Ticket";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import ViewBooking from "./admin/ViewBooking";
import ViewRegistrations from "./admin/ViewRegistrations";
import ManageEvents from "./admin/ManageEvents";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<ViewBooking />} />
        <Route path="/admin/registrations" element={<ViewRegistrations />} />
        <Route path="/admin/manageevents" element={<ManageEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;