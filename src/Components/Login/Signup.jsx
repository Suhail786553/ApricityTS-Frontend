import { useState} from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { MdOutlineEmail } from "react-icons/md"; // Email Icon
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Google and Facebook Icons
import { useNavigate} from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    }
  };
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Handle Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Handle Facebook login logic here
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
            Join Us Today
          </h6>
          <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-10" style={{ color: "#904af2", fontFamily: "sans-serif" }}>
            Create your account with us!
          </h2>
          <div className="h-px w-3/4 bg-gray-800 mb-6"></div>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <MdOutlineEmail className="text-3xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p>support@yourwebsite.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Div with Form and Animation */}
        <motion.div
          className="flex flex-col w-full md:w-2/5 shadow-lg p-12 bg-white rounded-lg"
          initial="hidden"
          animate="visible"
          variants={animationRight}
        >
          <h4 className="text-[#1D1E20] text-[30px] font-semibold mb-6" style={{ fontFamily: "Noto Sans, sans-serif", color: "#904af2" }}>
            Create your account
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name */}
              <div>
                <p className="mb-2">Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <p className="mb-2">Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <p className="mb-2">Confirm Password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-[#904af2] text-white rounded-md shadow-lg"
                style={{ borderRadius: "40px", fontSize: 19 }}
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Google and Facebook Login Buttons */}
          <div className="mt-6 flex space-x-4 w-full">
            {/* Google Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full sm:w-1/2 p-3 flex items-center justify-center bg-[#4285F4] text-white rounded-md shadow-lg"
            >
              <FaGoogle className="mr-2" />
              Login with Google
            </button>

            {/* Facebook Button */}
            <button
              onClick={handleFacebookLogin}
              className="w-full sm:w-1/2 p-3 flex items-center justify-center bg-[#3b5998] text-white rounded-md shadow-lg"
            >
              <FaFacebook className="mr-2" />
              Login with Facebook
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-[#904af2] hover:text-[#7a3ccd] transition font-semibold"
        >
          Login
        </a>
      </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpForm;
