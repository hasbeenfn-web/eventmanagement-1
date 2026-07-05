import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = () => {
    if (!name || !email || !mobile || !event) {
      alert("⚠ Please fill all the fields");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      name,
      email,
      mobile,
      event,
    };

    const oldRegistrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    oldRegistrations.push(newRegistration);

    localStorage.setItem(
      "registrations",
      JSON.stringify(oldRegistrations)
    );

    setMessage("🎉 Registration Successful!");

    setName("");
    setEmail("");
    setMobile("");
    setEvent("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18002d] via-[#3d0c70] to-[#5c0d6d] flex justify-center items-center relative overflow-hidden p-6">

      {/* Decorations */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">
        🎈
      </div>

      <div className="absolute top-10 right-10 text-5xl animate-pulse">
        ✨
      </div>

      <div className="absolute bottom-10 left-10 text-6xl animate-spin">
        🎊
      </div>

      <div className="absolute bottom-10 right-10 text-5xl animate-bounce">
        🎉
      </div>

      {/* Blur Effects */}
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* Card */}
      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl border border-pink-300/30 rounded-[35px] shadow-[0_0_40px_rgba(236,72,153,0.35)] hover:shadow-[0_0_70px_rgba(236,72,153,0.6)] transition-all duration-500 p-10">

        <h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,105,180,0.8)]"
        >
          📝 Event Registration
        </h1>

        <p className="text-center text-pink-100 italic tracking-wide mt-4 mb-8">
          Secure • Fast • Easy Registration
        </p>

        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-6 mb-5">

          <input
            type="text"
            placeholder="👤 Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-1/2 p-4 rounded-2xl bg-white/90 text-black outline-none border-2 border-transparent focus:border-pink-500 shadow-lg"
          />

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/2 p-4 rounded-2xl bg-white/90 text-black outline-none border-2 border-transparent focus:border-pink-500 shadow-lg"
          />

        </div>

        {/* Mobile & Event */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">

          <input
            type="tel"
            placeholder="📱 Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full md:w-1/2 p-4 rounded-2xl bg-white/90 text-black outline-none border-2 border-transparent focus:border-pink-500 shadow-lg"
          />

          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="w-full md:w-1/2 p-4 rounded-2xl bg-white/90 text-black outline-none border-2 border-transparent focus:border-pink-500 shadow-lg"
          >
            <option value="">🎉 Select Event</option>
            <option>💻 Tech Conference 2026</option>
            <option>🎵 Music Festival 2026</option>
            <option>🎨 Art Exhibition</option>
            <option>🏆 Sports Meet</option>
          </select>

        </div>

        {/* Register Button */}
        <button
          onClick={registerUser}
          className="w-full py-4 rounded-2xl text-2xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] transition-all duration-300"
        >
          🚀 Register Now
        </button>

        {/* Success Message */}
        {message && (
          <div className="mt-6 bg-green-500/20 border border-green-400 text-green-300 text-center py-4 rounded-xl font-bold text-lg animate-pulse">
            {message}
          </div>
        )}

        {/* Home Button */}
        <Link to="/">
          <button
            className="w-full mt-5 py-4 rounded-2xl text-xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-purple-700 hover:to-pink-600 hover:scale-105 transition-all duration-300"
          >
            🏠 Back to Home
          </button>
        </Link>

        <p className="text-center mt-8 text-pink-200 italic">
          🎊 We can't wait to see you at the event! 🎊
        </p>

      </div>
    </div>
  );
}

export default Register;