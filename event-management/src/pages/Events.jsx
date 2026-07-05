import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(data);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#220033] via-[#3b0764] to-[#5b0ea8] py-10 px-6">

      {/* Heading */}
      <h1
        className="text-6xl font-extrabold text-center mb-12
        bg-gradient-to-r from-pink-200 via-fuchsia-400 to-purple-300
        bg-clip-text text-transparent
        drop-shadow-[0_0_20px_rgba(255,105,180,0.8)]
        animate-pulse"
      >
        🎉 Available Events
      </h1>

      {/* Event Cards */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden
              border border-pink-400/40
              shadow-[0_0_30px_rgba(236,72,153,0.5)]
              hover:scale-105
              hover:shadow-[0_0_50px_rgba(236,72,153,0.8)]
              duration-500"
            >
      
              

              <div className="p-7">

                <h2 className="text-4xl font-extrabold text-yellow-300 mb-5">
                  {event.name}
                </h2>

                <div className="space-y-3 text-white text-xl">

                  <p>
                    📅 <span className="font-bold text-pink-300">Date :</span>{" "}
                    {event.date}
                  </p>

                  <p>
                    📍 <span className="font-bold text-pink-300">Venue :</span>{" "}
                    {event.venue}
                  </p>

                  <p>
                    ⏰ <span className="font-bold text-pink-300">Time :</span>{" "}
                    {event.time}
                  </p>

                  <p>
                    💰 <span className="font-bold text-pink-300">Ticket :</span>{" "}
                    ₹{event.price}
                  </p>

                </div>

                <Link to="/booking">
                  <button
                    className="mt-8 w-full bg-gradient-to-r
                    from-pink-500 to-fuchsia-600
                    hover:from-pink-600 hover:to-purple-600
                    text-white text-2xl font-bold py-4 rounded-2xl
                    shadow-lg hover:shadow-pink-500/70
                    transition-all duration-300"
                  >
                    🎟 Book Now
                  </button>
                </Link>

              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center text-white text-3xl col-span-2">
            No Events Available
          </h2>
        )}

      </div>

      {/* Home Button */}
      <div className="text-center mt-14">
        <Link to="/">
          <button
            className="px-10 py-4 text-2xl font-bold rounded-2xl
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:scale-110 duration-300
            shadow-[0_0_20px_rgba(236,72,153,0.7)]"
          >
            🏠 Back to Home
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Events;