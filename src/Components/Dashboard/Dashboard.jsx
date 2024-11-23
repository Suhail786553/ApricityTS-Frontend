import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTachometerAlt, FaCogs, FaSignOutAlt, FaCode } from "react-icons/fa";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData); // Update state with user data
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block transition duration-300`}
      >
        <div className="p-4 text-lg font-bold">OCR Dashboard</div>
        <ul className="mt-4">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaTachometerAlt className="mr-2" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaCode className="mr-2" />
            <Link to="/api">API</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaCogs className="mr-2" />
            <Link to="/settings">Settings</Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
          <h1 className="text-xl font-bold text-gray-800">OCR Dashboard</h1>
          <button
            className="block md:hidden text-gray-800"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        </header>

        {/* Welcome Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, {user.name}!
          </h2>
          <p className="text-gray-800">Email:{user.email}</p>
        </div>

        {/* OCR Features Section */}
        <section className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">OCR Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card: Upload Documents */}
            <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-gray-800">Upload Documents</h4>
              <p className="text-gray-600 mt-2">
                Easily upload images or PDF files for text extraction. Supports multiple formats.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                Upload Now
              </button>
            </div>

            {/* Feature Card: Analyze Text */}
            <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-gray-800">Analyze Text</h4>
              <p className="text-gray-600 mt-2">
                Extract, analyze, and format text data from your uploaded files in seconds.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                Start Analysis
              </button>
            </div>

            {/* Feature Card: API Access */}
            <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
              <h4 className="text-lg font-semibold text-gray-800">API Access</h4>
              <p className="text-gray-600 mt-2">
                Integrate our OCR API into your applications for seamless automation.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                View API Docs
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Usage Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">Documents Processed</h4>
              <p className="text-2xl font-bold text-blue-500 mt-2">1,245</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">OCR API Requests</h4>
              <p className="text-2xl font-bold text-green-500 mt-2">3,576</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">Storage Used</h4>
              <p className="text-2xl font-bold text-red-500 mt-2">5.8 GB</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
