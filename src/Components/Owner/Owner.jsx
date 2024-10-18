import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OwnerLoginSection = () => {
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is locked out
    const lockoutTime = localStorage.getItem("lockoutTime");

    if (lockoutTime) {
      const timeDifference = Date.now() - parseInt(lockoutTime, 10);
      if (timeDifference < 3600000) { // 1 hour = 3600000 milliseconds
        setIsLocked(true);
        updateTimeRemaining(3600000 - timeDifference); // Set initial time remaining
      } else {
        // Remove lockout if time has passed
        localStorage.removeItem("lockoutTime");
        localStorage.removeItem("failedAttempts");
        setIsLocked(false);
      }
    }

    // Update the remaining time every second if the user is locked
    const interval = setInterval(() => {
      if (isLocked) {
        const updatedLockoutTime = localStorage.getItem("lockoutTime");
        if (updatedLockoutTime) {
          const remainingTime = 3600000 - (Date.now() - parseInt(updatedLockoutTime, 10));
          if (remainingTime <= 0) {
            localStorage.removeItem("lockoutTime");
            localStorage.removeItem("failedAttempts");
            setIsLocked(false);
            setTimeRemaining(0);
          } else {
            updateTimeRemaining(remainingTime);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isLocked]);

  const updateTimeRemaining = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    setTimeRemaining(`${minutes}m ${seconds}s`);
  };

  const handleLogin = () => {
    if (isLocked) {
      alert(`You are locked out. Please try again in ${timeRemaining}.`);
      return;
    }

    if (password.trim() === "1234") {
      localStorage.setItem("ownerToken", "loggedIn");
      localStorage.removeItem("failedAttempts"); // Reset failed attempts on successful login
      navigate("/backup");
    } else {
      alert("Incorrect password");
      const failedAttempts = parseInt(localStorage.getItem("failedAttempts") || "0", 10) + 1;
      localStorage.setItem("failedAttempts", failedAttempts);

      if (failedAttempts >= 3) {
        const lockoutTime = Date.now();
        localStorage.setItem("lockoutTime", lockoutTime);
        setIsLocked(true);
        updateTimeRemaining(3600000); // Set initial lockout time to 1 hour
        alert("Too many failed attempts. You are locked out for 1 hour.");
      }
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
          disabled={isLocked}
        />
        <button
          onClick={handleLogin}
          className="w-60 p-3 bg-[#904af2] text-white rounded-md shadow-lg"
          style={{ borderRadius: "40px", fontSize: 19 }}
          disabled={isLocked}
        >
          {isLocked ? `Locked for ${timeRemaining}` : "Login"}
        </button>
        {isLocked && (
          <p className="text-red-600 mt-4">
            You are locked out. Please try again in {timeRemaining}.
          </p>
        )}
      </div>
    </div>
  );
};

export default OwnerLoginSection;
