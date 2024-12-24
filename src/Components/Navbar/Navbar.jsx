import { useState } from "react";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import img from './img.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  let timeoutId;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown handlers
  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 h-20" style={{ zIndex:50 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-14 w-auto md:h-12" src={img} alt="Logo" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-6" style={{ fontFamily: "Sans-Serif Noto-sans", fontSize: "16px" }}>
              <li className={`relative group ${currentPath === "/" ? "underline-active" : ""}`}>
                <a href="/" className="text-black-800 hover:text-purple-600">Home</a>
              </li>
              <li className={`relative group ${currentPath === "/products" ? "underline-active" : ""}`}>
                <a href="/products" className="text-purple-800 hover:text-black">Products</a>
              </li>
              <li className="relative group" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                <div className="flex items-center text-purple-800 hover:text-black cursor-pointer">
                  <span>Solutions</span>
                  <FiChevronDown className={`ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>
                {isDropdownOpen && (
                  <ul className="absolute top-full mt-2 w-32 bg-white shadow-lg rounded-md">
                    <li><a href="/legal" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Legal</a></li>
                    <li><a href="/finance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Finance</a></li>
                    <li><a href="/government" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Government</a></li>
                    <li><a href="/healthcare" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Healthcare</a></li>
                    <li><a href="/insurance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Insurance</a></li>
                    <li><a href="/it" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT-Sector</a></li>
                    <li><a href="/retail" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Retail</a></li>
                  </ul>
                )}
              </li>
              <li className={`relative group ${currentPath === "/usecases" ? "underline-active" : ""}`}>
                <a href="/usecases" className="text-purple-800 hover:text-black">Use cases</a>
              </li>
              <li className={`relative group ${currentPath === "/about" ? "underline-active" : ""}`}>
                <a href="/about" className="text-purple-800 hover:text-black">About</a>
              </li>
              <li className={`relative group ${currentPath === "/contact" ? "underline-active" : ""}`}>
                <a href="/contact" className="text-purple-800 hover:text-black">Contact Us</a>
              </li>
              <li className={`relative group ${currentPath === "/contact" ? "underline-active" : ""}`}>
                <a href="/fashion" className="text-purple-800 hover:text-black">FashionAI</a>
              </li>
            </ul>

            {/* Social and Admin Links */}
            <div className="flex items-center space-x-4 text-xl">
              {/* <a href="#" className="text-gray-800 hover:text-gray-500"><FaFacebook /></a>
              <a href="https://www.instagram.com/apricity_ts/" className="text-gray-800 hover:text-gray-500"><FaInstagram /></a> */}
              {/* <a href="https://www.linkedin.com/company/apricity-ts/" className="text-gray-800 hover:text-gray-500"><FaLinkedin /></a> */}
              <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                <a href="/owner" className="text-gray-800 hover:text-gray-500"><RiAdminFill /></a>
                {showTooltip && (
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-sm px-2 py-1 rounded">
                    Admin Login
                  </span>
                )}
              </div>
            </div>

            {/* Login and Signup Buttons */}
            <div className="flex space-x-4 ml-6">
              <a href="/login" className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition">
                Login
              </a>
              <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                Signup
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-6 p-6 bg-white shadow-lg">
            <li><a href="/" className="text-gray-800 hover:text-gray-500">Home</a></li>
            <li><a href="/products" className="text-gray-800 hover:text-gray-500">Products</a></li>
            <li className="relative">
              <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span className="text-gray-800 hover:text-gray-500">Solutions</span>
                <FiChevronDown className={`ml-1 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </div>
              {isDropdownOpen && (
                <ul className="w-40 bg-white border shadow-md">
                  <li><a href="/legal" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Legal</a></li>
                  <li><a href="/finance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Finance</a></li>
                  <li><a href="/government" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Government</a></li>
                  <li><a href="/healthcare" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Healthcare</a></li>
                  <li><a href="/insurance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Insurance</a></li>
                  <li><a href="/it" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT-Sector</a></li>
                  <li><a href="/retail" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Retail</a></li>
                </ul>
              )}
            </li>
            <li><a href="/usecases" className="text-gray-800 hover:text-gray-500">Use cases</a></li>
            <li><a href="/about" className="text-gray-800 hover:text-gray-500">About</a></li>
            <li><a href="/contact" className="text-gray-800 hover:text-gray-500">Contact Us</a></li>
            <li><a href="/fashion" className="text-gray-800 hover:text-gray-500">FashionAI</a></li>
            <a href="/login" className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition">
                Login
              </a>
              <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                Signup
              </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
