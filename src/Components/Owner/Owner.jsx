import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OwnerLoginSection = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.trim() === "1234") {
      localStorage.setItem("ownerToken", "loggedIn");
      navigate("/backup");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Owner Login</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-1/2 p-3 border border-black-300 rounded-md text-black mb-6"
          style={{ minWidth: "250px", width: "25vw" }}
        />
        <button
          onClick={handleLogin}
          className="w-60 p-3 bg-[#904af2] text-white rounded-md shadow-lg"
          style={{ borderRadius: "40px", fontSize: 19 }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default OwnerLoginSection;
