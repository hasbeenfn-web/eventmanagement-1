import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-[#140021] via-[#2b0a45] to-[#4e148c] relative overflow-hidden text-white">
      {/* Title */}
  <h1 className="text-7xl font-extrabold text-center pt-8 bg-gradient-to-r from-pink-300 via-white to-purple-300 bg-clip-text text-transparent">
   ✨ Event Management Platform ✨
</h1>
      <p className="text-pink-200 text-xl text-center mt-3 italic">
Plan • Register • Book • Celebrate 🎉
</p>
      {/* Image + Buttons */}
      <div className="flex justify-center items-center gap-16 mt-10">

        {/* Left Side Image */}
        <div>
          <img
src={banner}
className="w-[700px] h-[450px] rounded-3xl object-cover
shadow-[0_0_40px_rgba(236,72,153,0.7)]
border-4 border-pink-400"
/>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col gap-4">

          <Link
            to="/events"
            className="w-80 text-center bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-600 hover:to-purple-700
            text-white text-2xl py-4 rounded-2xl font-bold
            shadow-xl hover:scale-105 transition duration-300"
          >
           🎉 View Events
          </Link>

          <Link
            to="/register"
            className="w-80 text-center bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-600 hover:to-purple-700
            text-white text-2xl py-4 rounded-2xl font-bold
            shadow-xl hover:scale-105 transition duration-300"
          >
            👤 Register
          </Link>

          <Link
            to="/booking"
            className="w-80 text-center bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-600 hover:to-purple-700
            text-white text-2xl py-4 rounded-2xl font-bold
            shadow-xl hover:scale-105 transition duration-300"
          >
            🎫 Book Ticket
          </Link>

          <Link
            to="/calendar"
            className="w-80 text-center bg-gradient-to-r from-pink-500 to-purple-600
            hover:from-pink-600 hover:to-purple-700
            text-white text-2xl py-4 rounded-2xl font-bold
            shadow-xl hover:scale-105 transition duration-300"
          >
            📅 Calendar
          </Link>
          <Link
           to="/admin"
            className="w-80 text-center bg-gradient-to-r from-red-500 to-red-950
            hover:from-red-600 hover:to-red-700
            text-white text-2xl py-4 rounded-2xl font-bold
            shadow-xl hover:scale-105 transition duration-300"
 >
           👨‍💼 Admin Panel
           </Link>
 

        </div>

      </div>

    </div>
  );
}

export default Home;