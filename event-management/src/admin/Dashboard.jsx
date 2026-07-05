import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [users, setUsers] = useState(0);
  const [events, setEvents] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [revenue, setRevenue] = useState(0);

 useEffect(() => {
  const registrations =
    JSON.parse(localStorage.getItem("registrations")) || [];

  const eventList =
    JSON.parse(localStorage.getItem("events")) || [];

  const bookingList =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Total Users = Booking Count
  setUsers(bookingList.length);

  setEvents(eventList.length);
  setBookings(bookingList.length);

  const totalRevenue = bookingList.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  setRevenue(totalRevenue);

}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 p-10">

      <h1 className="text-5xl font-bold text-center text-pink-400 mb-12">
        📊 Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-8">

        {/* Total Users */}
        <div className="bg-white/10 p-8 rounded-3xl text-center">
          <h2 className="text-4xl">👥</h2>
          <h1 className="text-5xl mt-4 text-white">{users}</h1>
          <p className="text-white mt-2">Total Users</p>
        </div>

        {/* Events */}
        <div className="bg-white/10 p-8 rounded-3xl text-center">
          <h2 className="text-4xl">🎉</h2>
          <h1 className="text-5xl mt-4 text-white">{events}</h1>
          <p className="text-white mt-2">Events</p>
        </div>

        {/* Bookings */}
        <div className="bg-white/10 p-8 rounded-3xl text-center">
          <h2 className="text-4xl">🎫</h2>
          <h1 className="text-5xl mt-4 text-white">{bookings}</h1>
          <p className="text-white mt-2">Bookings</p>
        </div>

        {/* Revenue */}
        <div className="bg-white/10 p-8 rounded-3xl text-center">
          <h2 className="text-4xl">💰</h2>
          <h1 className="text-5xl mt-4 text-white">
            ₹{revenue}
          </h1>
          <p className="text-white mt-2">Revenue</p>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-8 mt-12">

        <Link to="/admin/manageevents">
          <button className="w-full bg-pink-500 hover:bg-pink-600 py-5 rounded-2xl text-2xl text-white font-bold">
            🎉 Manage Events
          </button>
        </Link>

        <Link to="/admin/registrations">
          <button className="w-full bg-pink-500 hover:bg-pink-600 py-5 rounded-2xl text-2xl text-white font-bold">
            👥 Registrations
          </button>
        </Link>

        <Link to="/admin/bookings">
          <button className="w-full bg-pink-500 hover:bg-pink-600 py-5 rounded-2xl text-2xl text-white font-bold">
            🎫 Bookings
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;