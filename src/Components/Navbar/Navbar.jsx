import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom"; // For tracking the current route

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This is to track the active link based on the URL path
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-10">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-20 md:h-10 md:w-60"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=404,fit=crop,q=95/YZ9bEQRPa4i5BwKB/logo-Yg294oB3LLFrGjQ8.png"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <ul
              className="flex space-x-6"
              style={{ fontFamily: "Sans-Serif Noto-sans", fontSize: "16px" }}
            >
              <li className="relative group">
                <a
                  href="/"
                  className={`text-black-800 hover:text-purple-600 ${
                    currentPath === "/" ? "underline-active" : ""
                  }`}
                >
                  Home
                </a>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                    currentPath === "/" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
              <li className="relative group">
                <a
                  href="/products"
                  className={`text-purple-800 hover:text-black ${
                    currentPath === "/products" ? "underline-active" : ""
                  }`}
                  style={{ fontFamily: "sans-serif Noto-sans" }}
                >
                  Products
                </a>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                    currentPath === "/products" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
              <li className="relative group">
                <a
                  href="/usecases"
                  className={`text-purple-800 hover:text-black ${
                    currentPath === "/usecases" ? "underline-active" : ""
                  }`}
                >
                  Use cases
                </a>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                    currentPath === "/usecases" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
              <li className="relative group">
                <a
                  href="/about"
                  className={`text-purple-800 hover:text-black ${
                    currentPath === "/about" ? "underline-active" : ""
                  }`}
                >
                  About
                </a>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                    currentPath === "/about" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </li>
            </ul>
            <div className="flex space-x-4" style={{ fontSize: "20px" }}>
              <a
                href="https://www.facebook.com/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-6 p-6 bg-white shadow-lg">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-gray-800 hover:text-gray-500"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/usecases"
                className="text-gray-800 hover:text-gray-500"
              >
                Use cases
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-gray-500">
                About
              </a>
            </li>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="text-gray-800 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" className="text-gray-800 hover:text-gray-500">
                <FaXTwitter />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
