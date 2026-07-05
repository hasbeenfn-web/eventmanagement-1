import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(data);
  }, []);

  const getStatus = (index) => {
    const status = [
      {
        text: "🟢 Upcoming",
        color: "text-green-600",
      },
      {
        text: "🔥 Popular",
        color: "text-orange-500",
      },
      {
        text: "⭐ New",
        color: "text-blue-600",
      },
      {
        text: "🎯 Open",
        color: "text-purple-600",
      },
    ];

    return status[index % status.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-950 flex justify-center items-center p-8">

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-pink-400/30 rounded-3xl shadow-[0_0_35px_rgba(236,72,153,0.4)] p-10">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent drop-shadow-lg">
           Event Calendar
        </h1>

        <p className="text-center text-pink-100 italic mt-3 mb-10 tracking-wide">
          Stay updated with all upcoming events ✨
        </p>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl shadow-2xl overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-purple-700 text-white text-xl">
                <th className="py-4">📅 Date</th>
                <th className="py-4">🎉 Event</th>
                <th className="py-4">📍 Venue</th>
                <th className="py-4">⏰ Time</th>
                <th className="py-4">🔥 Status</th>
              </tr>
            </thead>

            <tbody className="bg-white text-gray-800 text-lg">

              {events.length > 0 ? (

                events.map((event, index) => {
                  const status = getStatus(index);

                  return (
                    <tr
                      key={index}
                      className="hover:bg-pink-100 transition duration-300 text-center"
                    >
                      <td className="border p-4">
                        {event.date}
                      </td>

                      <td className="border p-4 font-semibold">
                        🎉 {event.name}
                      </td>

                      <td className="border p-4">
                        📍 {event.venue}
                      </td>

                      <td className="border p-4">
                        ⏰ {event.time}
                      </td>

                      <td
                        className={`border p-4 font-bold ${status.color}`}
                      >
                        {status.text}
                      </td>
                    </tr>
                  );
                })

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-6 text-gray-500 font-bold"
                  >
                    No Events Available
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Summary */}
        <div className="mt-8 text-center">

          <h2 className="text-2xl text-pink-300 font-bold">
            📌 Total Events : {events.length}
          </h2>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">

          <Link to="/events">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition duration-300 shadow-lg">
              🎉 View Events
            </button>
          </Link>

          <Link to="/">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold hover:scale-105 transition duration-300 shadow-lg">
              🏠 Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Calendar;