import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const deleteBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 p-8">

      <h1 className="text-5xl font-bold text-center text-pink-400 mb-10">
        🎟 View Bookings
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">

          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Event</th>
              <th className="p-4">Tickets</th>
              <th className="p-4">Payment</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Booking ID</th>
              
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {bookings.length > 0 ? (

              bookings.map((booking, index) => (

                <tr
                  key={index}
                  className="text-center border-b hover:bg-pink-50"
                >
                  <td className="p-3">{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.event}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.payment}</td>
                  <td>₹{booking.amount}</td>
                  <td>{booking.bookingId}</td>
                  

                  <td>
                    <button
                      onClick={() => deleteBooking(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="7" className="p-5 text-center">
                  No Bookings Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

      <div className="text-center mt-8">

        <Link to="/admin/dashboard">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-white">
            ⬅ Back to Dashboard
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ViewBooking;