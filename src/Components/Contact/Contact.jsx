import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { MdOutlineEmail } from "react-icons/md";

const OwnerLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.trim() === "ms786@123") {
      localStorage.setItem("ownerToken", "loggedIn");
      navigate("/backup"); // Redirect to backup page
    } else {
      alert("Incorrect password");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Animation settings for Framer Motion
  const animationLeft = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const animationRight = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      {/* Contact Form */}
      <div className="flex flex-col h-auto justify-center items-center bg-white pb-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center">
          {/* Left Div with Animation */}
          <motion.div
            className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left px-4 py-8"
            initial="hidden"
            animate="visible"
            variants={animationLeft}
          >
            <h6
              className="text-[#1D1E20] text-[25px] font-semibold mb-6"
              style={{ fontFamily: "sans-serif", color: "black" }}
            >
              Get in Touch
            </h6>
            <h2 className="text-lg mb-6 leading-10" style={{ color: "#904af2", fontFamily: "sans-serif", fontSize:"40px" }}>
              Are you ready to talk to <br />
              us?
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

          {/* Right Div with Form and Animation */}
          <motion.div
            className="flex flex-col w-full md:w-2/5 shadow-lg p-4 bg-white rounded-lg"
            initial="hidden"
            animate="visible"
            variants={animationRight}
          >
            <h4
              className="text-[#1D1E20] text-[30px] font-semibold mb-6"
              style={{ fontFamily: "Noto Sans, sans-serif", color: "#904af2" }}
            >
              Send us a message
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name and Company */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full">
                    <p className="mb-2">Name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full p-3 border border-gray-300 rounded-md text-black"
                    />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <p className="mb-2">Company</p>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full p-3 border border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full">
                    <p className="mb-2">Phone</p>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full p-3 border border-gray-300 rounded-md text-black"
                    />
                  </div>
                  <div className="w-full mt-4 md:mt-0">
                    <p className="mb-2">Email</p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full p-3 border border-gray-300 rounded-md text-black"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <p className="mb-2">Subject</p>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                  />
                </div>

                {/* Message */}
                <div>
                  <p className="mb-2">Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                    rows="4"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full p-3 bg-[#904af2] text-white rounded-md shadow-lg"
                  style={{ borderRadius: "40px", fontSize: 19 }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Owner Login Form */}
      <div className="flex justify-center items-center py-8">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Owner Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-1/2 p-3 border border-black-300 rounded-md text-black mb-6"
            style={{ minWidth: "250px", width: "25vw" }} // Ensures it doesn't get too small on mobile
          />
          <button
            onClick={handleLogin}
            className="w-60 p-3 bg-[#904af2] text-white rounded-md"
            style={{ borderRadius: "40px", fontSize: 19 }}
          >
            Login
          </button>
        </div>
      </div>

      {/* Responsive Design for Small Screens */}
      <style>{`
        @media (max-width: 768px) {
          .contact-form {
            margin-bottom: 2rem; // Add space below contact form for smaller screens
          }
        }
      `}</style>
    </>
  );
};

export default OwnerLogin;
