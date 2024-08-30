import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 ...">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-20 md:h-10 md:w-60"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=404,fit=crop,q=95/YZ9bEQRPa4i5BwKB/logo-Yg294oB3LLFrGjQ8.png"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-6" style={{ fontFamily: "Sans-Serif Noto-sans", fontSize: "16px" }}>
              <li className="relative group">
                <a href="/" className="text-gray-800 hover:text-black">Home</a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <a href="/products" className="text-gray-800 hover:text-gray-500">Products</a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <a href="/usecases" className="text-gray-800 hover:text-gray-500">Use cases</a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <a href="/about" className="text-gray-800 hover:text-gray-500">About</a>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300"></span>
              </li>
            </ul>
            <div className="flex space-x-4" style={{ fontSize: "20px" }}>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
              <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-6 p-6 bg-white shadow-lg">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-500">Home</a>
            </li>
            <li>
              <a href="/products" className="text-gray-800 hover:text-gray-500">Products</a>
            </li>
            <li>
              <a href="/usecases" className="text-gray-800 hover:text-gray-500">Use cases</a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 hover:text-gray-500">About</a>
            </li>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-500">
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
