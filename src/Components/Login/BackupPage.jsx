import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BackupPage = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the owner is logged in by verifying the token in localStorage
    const ownerToken = localStorage.getItem("ownerToken");

    if (!ownerToken || ownerToken !== "loggedIn") {
      alert("Access denied. Please log in as the owner.");
      navigate("/login"); // Redirect to login page if not logged in
    } else {
      // Fetch form data only if the owner is logged in
      fetchFormData();
    }
  }, [navigate]);

  // Function to fetch form data from the backend
  const fetchFormData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/backup", {
        headers: {
          Authorization: "Bearer your-auth-token", // Example of passing an auth token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error("Failed to fetch data:", response.statusText);
        alert("Error fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Form Submissions</h2>

        {/* Display form submissions in a responsive table format */}
        {formData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left">S.No</th>
                  <th className="px-4 py-2 text-left">Company Name</th>
                  <th className="px-4 py-2 text-left">Target Market</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((form, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td> {/* Serial number */}
                    <td className="px-4 py-2">{form.companyName}</td>
                    <td className="px-4 py-2">{form.targetMarket}</td>
                    <td className="px-4 py-2">{form.email}</td>
                    <td className="px-4 py-2">{new Date(form.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">No form submissions yet.</p>
        )}
      </div>
    </div>
  );
};

export default BackupPage;
