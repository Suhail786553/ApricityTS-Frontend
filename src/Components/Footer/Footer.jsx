// import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-white py-12" style={{ backgroundColor: "#0f0a14" }}>
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-semibold mb-2">Accelerating</h5>
          <p className="mb-4">
            Businesses with smart AI-driven solutions in UAE, Dubai.
          </p>
          <div className="flex space-x-4 mb-4">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 text-2xl hover:text-white-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 text-2xl hover:text-white-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 text-2xl hover:text-white-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800 text-2xl hover:text-white-500"
            >
              <FaXTwitter />
            </a>
          </div>

          <p>© 2024. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col mb-8 md:mb-0 md:ml-auto md:mr-auto">
          <h5 className="text-xl font-semibold mb-2">Solutions</h5>
          <p className="mb-4">+91-7887016676</p>
          <p className="mb-4">query@apricityts.com</p>
        </div>

        {/* Right Section */}
        <div className="md:ml-auto w-full md:w-auto">
          <h5 className="text-xl font-semibold mb-2">AI</h5>
          <p className="mb-4">Accelerate business processes with AI</p>
          <div className="mb-4 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="p-3 rounded-md text-black"
            />
            <button className="bg-[#904af2] w-60 text-white p-3 rounded-md" style={{borderRadius:"40px"}}>
              Submit Your Email Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
