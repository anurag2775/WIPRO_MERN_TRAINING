import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";

function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const pageBg = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black";
  const cardBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const inputStyle =
    theme === "dark"
      ? "bg-gray-700 text-white border-gray-600"
      : "bg-white text-black border-gray-300";
  const muted = theme === "dark" ? "text-gray-300" : "text-gray-600";

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className={`w-full min-h-[70vh] flex items-center justify-center ${pageBg}`}>
      <div className={`${cardBg} p-8 rounded shadow w-full max-w-md`}>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className={`block text-sm mb-1 ${muted}`}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2 rounded border ${inputStyle}`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm mb-1 ${muted}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 rounded border ${inputStyle}`}
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;


