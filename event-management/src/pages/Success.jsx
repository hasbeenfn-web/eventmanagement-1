import { Link } from "react-router-dom";

function Success() {
  const bookingId = localStorage.getItem("bookingId");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[500px] text-center">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-4xl font-bold text-pink-600">
          Booking Confirmed!
        </h1>

        <p className="mt-3 text-gray-600">
          Your ticket has been booked successfully.
        </p>

        <h2 className="mt-4 font-bold text-purple-700">
          Booking ID : {bookingId}
        </h2>

        <Link to="/ticket">
          <button className="mt-8 w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600">
            🎟 View Ticket Details
          </button>
        </Link>

        <Link to="/">
          <button className="mt-4 w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800">
            🏠 Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Success;