import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BackupPage = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hiddenRows, setHiddenRows] = useState(new Set()); // Track hidden rows

  const navigate = useNavigate();

  useEffect(() => {
    const ownerToken = localStorage.getItem("ownerToken");
    if (!ownerToken || ownerToken !== "loggedIn") {
      alert("Access denied. Please log in as the owner.");
      navigate("/login");
    } else {
      fetchFormData();
    }
  }, [navigate]);
  //fetch data
  const fetchFormData = async () => {
    try {
      setLoading(true);
      // Dynamically select the base URL
      const baseURL = window.location.hostname === "localhost"
        ? "http://localhost:5000/api/backup"
        : "https://apricityts-backend.onrender.com/api/backup";
  
      const response = await fetch(baseURL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Dynamically get token
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFormData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle row hiding when clicking delete
  const handleDelete = (id) => {
    setHiddenRows((prev) => new Set(prev).add(id)); // Mark the row as hidden
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Form Submissions</h2>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : formData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left">S.No</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Subject</th>
                  <th className="px-4 py-2 text-left">Message</th>
                  <th className="px-4 py-2 text-left">Submitted On</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((form, index) => (
                  !hiddenRows.has(form._id) && ( // Only show row if it's not hidden
                    <tr key={form._id} className="border-b">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{form.name}</td>
                      <td className="px-4 py-2">{form.company}</td>
                      <td className="px-4 py-2">{form.phone}</td>
                      <td className="px-4 py-2">{form.email}</td>
                      <td className="px-4 py-2">{form.subject}</td>
                      <td className="px-4 py-2">{form.message}</td>
                      <td className="px-4 py-2">{new Date(form.date).toLocaleString()}</td>
                      <td className="px-4 py-2">
                        <button
                          className="text-red-500"
                          onClick={() => handleDelete(form._id)} // Handle delete on click
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">No form submissions found.</p>
        )}
      </div>
    </div>
  );
};

export default BackupPage;
