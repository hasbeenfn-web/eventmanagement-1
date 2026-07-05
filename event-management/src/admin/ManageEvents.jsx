import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("events")) || [
      {
        name: "Tech Conference 2026",
        date: "15 July 2026",
        venue: "Chennai Trade Centre",
        time: "10:00 AM",
      },
      {
        name: "Music Festival 2026",
        date: "20 August 2026",
        venue: "Marina Beach",
        time: "6:00 PM",
      },
      {
        name: "Art Exhibition",
        date: "10 September 2026",
        venue: "Express Avenue",
        time: "11:00 AM",
      },
      {
        name: "Sports Meet",
        date: "25 October 2026",
        venue: "Nehru Stadium",
        time: "9:00 AM",
      },
    ];

    setEvents(data);
    localStorage.setItem("events", JSON.stringify(data));
  }, []);

  const addEvent = () => {
    if (!eventName || !date || !venue || !time) {
      alert("Please fill all fields");
      return;
    }

 const newEvent = {
  name: eventName,
  date,
  venue,
  time,
  price,
  image,
    };

    const updated = [...events, newEvent];

    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));

    setEventName("");
    setDate("");
    setVenue("");
    setTime("");
  };

  const deleteEvent = (index) => {
    const updated = events.filter((_, i) => i !== index);

    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 p-8">

      <h1 className="text-5xl font-bold text-center text-pink-400 mb-10">
        🎉 Manage Events
      </h1>

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="p-3 rounded-xl text-black"
          />

          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 rounded-xl text-black"
          />

          <input
            type="text"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="p-3 rounded-xl text-black"
          />

          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-3 rounded-xl text-black"
          />
          <input
            placeholder="Ticket Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 rounded-xl text-black"
          />

        </div>

        <button
          onClick={addEvent}
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 py-3 rounded-xl text-xl text-white"
        >
          ➕ Add Event
        </button>

      </div>

      <div className="max-w-5xl mx-auto mt-10 overflow-x-auto">

        <table className="w-full bg-white rounded-xl overflow-hidden">

          <thead className="bg-pink-500 text-white">

            <tr>
              <th className="p-4">Event</th>
              <th className="p-4">Date</th>
              <th className="p-4">Venue</th>
              <th className="p-4">Time</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            {events.map((event, index) => (

              <tr key={index} className="text-center border-b">

                <td className="p-3">{event.name}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>{event.time}</td>

                <td>

                  <button
                    onClick={() => deleteEvent(index)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="text-center mt-10">

        <Link to="/admin">
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-white">
            ⬅ Back to Dashboard
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ManageEvents;