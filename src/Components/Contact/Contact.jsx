import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OwnerLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.trim() === "yourStrongPassword") {
      localStorage.setItem("ownerToken", "loggedIn");
      navigate("/backup");  // Redirect to backup page
    } else {
      alert("Incorrect password");
    }
  };

  const [formData, setFormData] = useState({
    companyName: "",
    targetMarket: "",
    email: "",
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
      const response = await fetch('http://localhost:5000/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ companyName: "", targetMarket: "", email: "" });
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Contact Form */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Div */}
          <div className="w-full md:w-1/2">
            <h4 className="text-[#1D1E20] text-[40px] font-semibold mb-6" style={{ fontFamily: "Noto Sans, sans-serif" }}>
              Contact Us
            </h4>
            <div className="space-y-6">
              {/* Office Locations */}
              <div><strong>Lucknow</strong><p>537U/0777-G, FaizullahGanj-III, Bharat Nagar, Lucknow, <br /> Uttar Pradesh, INDIA - 226020</p></div>
              <div><strong>Bangalore</strong><p>1st Cross Kankanagar Opp. Manyata Tech Park, Hebbal, <br /> Bangalore, INDIA - 560045</p></div>
              <div><strong>Mauritius</strong><p>Jackaria Road, Les Pailles, Port Louis, MAURITIUS - 11205</p></div>
              <div><strong>United States</strong><p>1786 Heritage Lane #2006, Sacramento, CA, USA - 95815</p></div>
            </div>
          </div>

          {/* Right Div */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">Company Name</p>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter Your Company Name" className="w-full p-3 border border-gray-300 rounded-md text-black" />
                </div>
                <div>
                  <p className="mb-2">Target Market for AI Solutions</p>
                  <input type="text" name="targetMarket" value={formData.targetMarket} onChange={handleChange} placeholder="Enter Your Target Market Details" className="w-full p-3 border border-gray-300 rounded-md text-black" />
                </div>
                <div>
                  <p className="mb-2">Company Email-Address</p>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email-Address" className="w-full p-4 border border-gray-300 rounded-md text-black" />
                </div>
                <button type="submit" className="w-60 p-3 bg-[#904af2] text-white rounded-md" style={{ borderRadius: "40px", fontSize: 19 }}>
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Owner Login Form */}
      <div className="flex justify-center items-center py-16">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Owner Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-1/2 p-3 border border-black-300 rounded-md text-black mb-6"
            style={{ minWidth: "250px",width:"25vw"}}  // Ensures it doesn't get too small on mobile
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
    </>
  );
};

export default OwnerLogin;
