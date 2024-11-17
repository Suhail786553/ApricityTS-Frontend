import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData); // Update state with user data
  }, []);

  if (!user) return <p>Loading...</p>; // Display loading message if user data is not available

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="dashboard-container bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        {/* Profile Dropdown */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40" // Replace with user profile image URL
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => alert("Profile View Coming Soon!")}
                >
                  Profile View
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, {user.name || "Guest"}!
          </h2>
          <p className="text-gray-600 mt-2">Email: {user.email || "N/A"}</p>
        </div>

        {/* Additional Content */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Cards */}
          <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Your Tasks</h3>
            <p className="text-gray-600 mt-2">
              Check your pending tasks and deadlines.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Updates
            </h3>
            <p className="text-gray-600 mt-2">
              Stay informed with the latest updates.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              Profile Settings
            </h3>
            <p className="text-gray-600 mt-2">
              Manage your account settings here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     setUserData(user);
//   }, []);

//   if (!userData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {userData.name}</h1>
//       <p>Email: {userData.email}</p>
//     </div>
//   );
// };

// export default Dashboard;
