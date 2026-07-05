import { Link } from "react-router-dom";

function Ticket() {
const name = localStorage.getItem("name") || "";
const email = localStorage.getItem("email") || "";
const event = localStorage.getItem("event") || "";
const tickets = localStorage.getItem("tickets") || "";
const amount = localStorage.getItem("amount") || "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 flex justify-center items-center p-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-6">
          <h1 className="text-4xl font-bold">
            🎟 Event Ticket
          </h1>
          <p className="mt-2">Your Booking is Confirmed</p>
        </div>

        {/* Ticket Details */}
        <div className="p-8 space-y-5 text-lg text-black">

  <div className="flex justify-between border-b pb-3">
    <span className="font-bold">👤 Name</span>
    <span className="font-semibold text-gray-700">{name}</span>
  </div>

  <div className="flex justify-between border-b pb-3">
    <span className="font-bold">📧 Email</span>
    <span className="font-semibold text-gray-700">{email}</span>
  </div>

  <div className="flex justify-between border-b pb-3">
    <span className="font-bold">🎉 Event</span>
    <span className="font-semibold text-gray-700">{event}</span>
  </div>

  <div className="flex justify-between border-b pb-3">
    <span className="font-bold">🎟 Tickets</span>
    <span className="font-semibold text-gray-700">{tickets}</span>
  </div>

  <div className="flex justify-between border-b pb-3">
    <span className="font-bold">💰 Amount</span>
    <span className="font-bold text-pink-600">
      ₹{amount}
    </span>
  </div>

</div>
      

        

        {/* Footer Buttons */}
        <div className="p-6">

          <button
            onClick={() => window.print()}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-lg font-bold mb-4"
          >
            🖨 Print Ticket
          </button>

          <Link to="/">
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl text-lg">
              🏠 Back to Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Ticket;