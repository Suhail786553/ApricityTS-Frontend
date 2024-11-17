import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
  
    try { 
      const response = await axios.post("http://localhost:5000/api/auth/login", loginData);
      if (response.data?.user && response.data?.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  
    

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add Google login logic
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Add Facebook login logic
  };

  const animationLeft = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const animationRight = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex flex-col h-auto justify-center items-center bg-white pb-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center">
        {/* Left Div with Animation */}
        <motion.div
          className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left px-4 py-8"
          initial="hidden"
          animate="visible"
          variants={animationLeft}
        >
          <h6 className="text-[#1D1E20] text-[25px] font-semibold mb-6">
            Welcome Back
          </h6>
          <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-10 text-[#904af2]">
            Please login to continue
          </h2>
          <div className="h-px w-3/4 bg-gray-800 mb-6"></div>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <MdOutlineEmail className="text-3xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p>query@apricityts.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Div with Login Form and Animation */}
        <motion.div
          className="flex flex-col w-full md:w-2/5 shadow-lg p-12 bg-white rounded-lg"
          initial="hidden"
          animate="visible"
          variants={animationRight}
        >
          <h4 className="text-[#1D1E20] text-[30px] font-semibold mb-6 text-[#904af2]">
            Login to your account
          </h4>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email */}
              <div>
                <p className="mb-2">Email</p>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <p className="mb-2">Password</p>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full p-3 text-white rounded-md shadow-lg ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#904af2]"
                }`}
                style={{ borderRadius: "40px", fontSize: 19 }}
              >
                {loading ? "Logging In..." : "Log In"}
              </button>
            </div>
          </form>

          {/* Google and Facebook Login */}
          <div className="mt-6 flex space-x-4 w-full">
            <button
              onClick={handleGoogleLogin}
              className="w-full sm:w-1/2 p-3 flex items-center justify-center bg-[#4285F4] text-white rounded-md shadow-lg"
            >
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="w-full sm:w-1/2 p-3 flex items-center justify-center bg-[#3b5998] text-white rounded-md shadow-lg"
            >
              <FaFacebook className="mr-2" />
              Login with Facebook
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
