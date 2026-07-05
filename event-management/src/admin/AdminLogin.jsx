import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const login = () => {
    if (username === "Farhana" && password === "hasbee1326") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 flex justify-center items-center">

      <div className="bg-white/10 backdrop-blur-xl border border-pink-500/30 p-10 rounded-3xl w-[400px] shadow-2xl">

        <h1 className="text-4xl text-center font-bold text-pink-400 mb-8">
          👨‍💼 Admin Login
        </h1>

        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              passwordRef.current.focus();
            }
          }}
          className="w-full p-4 rounded-xl mb-5 text-black bg-white"
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login();
            }
          }}
          className="w-full p-4 rounded-xl mb-6 text-black bg-white"
        />

        <button
          onClick={login}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-xl font-bold"
        >
          Login
        </button>

        <Link to="/">
          <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl text-xl font-bold">
            🏠 Back to Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default AdminLogin;