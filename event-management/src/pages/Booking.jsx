import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState(1);
  const [payment, setPayment] = useState("");
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("events")) || [];

    setEvents(data);

    if (data.length > 0) {
      setEvent(data[0].name);
      setSelectedPrice(Number(data[0].price));
    }
  }, []);

  const amount = selectedPrice * tickets;

  const bookTicket = () => {
    if (
      !name ||
      !email ||
      !payment ||
      !paymentId ||
      tickets < 1 ||
      tickets > 10
    ) {
      alert("Please fill all fields");
      return;
    }

    const bookingId =
      "BK-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const newBooking = {
      bookingId,
      name,
      email,
      event,
      tickets,
      payment,
      paymentId,
      amount,
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    oldBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(oldBookings)
    );

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("event", event);
    localStorage.setItem("tickets", tickets);
    localStorage.setItem("payment", payment);
    localStorage.setItem("amount", amount);
    localStorage.setItem("bookingId", bookingId);

    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black flex justify-center items-center p-6">

      <div className="bg-[#1e1737] w-full max-w-lg rounded-3xl p-8 shadow-2xl border border-purple-500">

        <span className="bg-purple-800 text-pink-300 px-4 py-1 rounded-full text-sm">
          🎟 Event Ticketing
        </span>

        <h1 className="text-4xl font-bold text-white mt-5 mb-8">
          Book Your <span className="text-pink-400">Ticket</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="text-gray-300 text-sm">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="you@email.com"
              className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>

        <div className="mt-5">

          <label className="text-gray-300 text-sm">
            Select Event
          </label>

          <select
            className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
            value={event}
            onChange={(e) => {
              setEvent(e.target.value);

              const selectedEvent = events.find(
                (item) => item.name === e.target.value
              );

              if (selectedEvent) {
                setSelectedPrice(Number(selectedEvent.price));
              }
            }}
          >

            {events.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}

          </select>

        </div>

        <div className="mt-5">

          <label className="text-gray-300 text-sm">
            Number of Tickets
          </label>

          <input
            type="number"
            min="1"
            max="10"
            className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
          />

        </div>

        <div className="bg-purple-900 mt-6 p-5 rounded-xl flex justify-between">

          <span className="text-gray-300">
            Total Amount
          </span>

          <span className="text-pink-400 text-2xl font-bold">
            ₹{amount}
          </span>

        </div>

        <div className="mt-6">

          <label className="text-gray-300 text-sm">
            Payment Method
          </label>

          <select
            className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select Payment</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Net Banking</option>
          </select>

        </div>

        <div className="mt-5">

          <label className="text-gray-300 text-sm">
            UPI / Card Number
          </label>

          <input
            type="text"
            placeholder="Enter Payment Details"
            className="w-full mt-2 p-3 rounded-lg bg-[#16112b] text-white"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
          />

        </div>

        <button
          onClick={bookTicket}
          className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl text-white font-bold hover:scale-105 duration-300"
        >
          🔒 Confirm & Pay
        </button>

        <Link to="/">
          <button className="w-full mt-4 border border-gray-500 py-3 rounded-xl text-gray-300 hover:bg-gray-800">
            🏠 Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Booking;