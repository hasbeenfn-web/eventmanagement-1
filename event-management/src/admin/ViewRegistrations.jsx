import { useEffect, useState } from "react";

function ViewRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(data);
  }, []);

  return (
    <div className="min-h-screen bg-purple-950 text-white p-10">
      <h1 className="text-5xl text-center text-pink-400 mb-10">
        👥 Registered Users
      </h1>

      <table className="w-full bg-white text-black rounded-xl overflow-hidden">
        <thead className="bg-pink-500 text-white">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Mobile</th>
            <th className="p-4">Event</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((user) => (
            <tr key={user.id} className="text-center border">
              <td className="p-3">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRegistrations;