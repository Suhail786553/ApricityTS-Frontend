import { useState } from "react";
const Section = () => {
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
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Upper Content */}
    <h3
      className="font-noto text-[36px] md:text-[46px] text-[#1D1E20] mb-12 font-semibold"
      style={{ fontFamily: "Noto Sans, sans-serif", marginTop: "-40px" }}
    >
      Accelerating <br /> Business Processes <br /> with Smart AI
    </h3>

    {/* Lower Content */}
    <div
      className="flex flex-col-reverse md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-8"
      style={{ marginTop: "-45px" }}
    >
      {/* Left Div (Image) */}
      <div className="w-full md:w-1/2 lg:w-5/12 flex-grow"> {/* Flex-grow ensures equal height */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&h=738"
          alt="AI Solutions"
          className="w-full h-full object-cover rounded-lg" /* Set h-full for full container height */
        />
      </div>

      {/* Right Div (Text Content) */}
      <div className="w-full md:w-1/2 lg:w-7/12 flex-grow flex items-center"> {/* Flex-grow & center content */}
        <p className="text-lg leading-relaxed text-gray-700">
          At Apricity TS, we are at the forefront of advancing business
          processes through innovative artificial intelligence solutions.
          With over a decade of expertise, we deliver state-of-the-art
          AI-driven technologies that seamlessly integrate with your
          services to drive efficiency and intelligence.
          <br />
          <br />
          Our diverse product portfolio includes cutting-edge solutions
          designed to address a wide range of business needs. From our
          advanced OCR engines to intelligent document processing tools,
          our offerings are crafted to enhance and automate critical
          business functions.
          <br />
          <br />
          We specialize in providing solutions that cater to various
          industries and are committed to helping businesses in the UAE,
          Dubai, and beyond achieve new levels of productivity and
          insight. Our technology is designed to evolve with the industry,
          ensuring that as we expand our product line, you benefit from
          the latest advancements in AI.
          <br />
          <br />
          Discover how Apricity TS can transform your operations with our
          innovative solutions and become a catalyst for your business
          success.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Contact Form Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Div */}
          <div className="w-full md:w-1/2">
            <h4
              className="text-[#1D1E20] text-[40px] font-semibold mb-6"
              style={{ fontFamily: "Noto Sans, sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-6">
              {/* Repeat for Lucknow 1 */}
              <div>
                <strong>Lucknow</strong>
                <p>
                  537U/0777-G, FaizullahGanj-III, Bharat Nagar, Lucknow,
                  <br></br> Uttar Pradesh, INDIA - 226020
                </p>
              </div>
              {/* Repeat for Lucknow 2 */}
              {/* <div>
                <strong>Banglore</strong>
                <p>
                  1st Cross Kankanagar Opp. Manyata Tech Park, Hebbal,
                  <br></br>{" "}
                  Bangalore, INDIA - 560045
                </p>
              </div> */}
              {/* Repeat for Lucknow 3 */}
              <div>
                <strong>Mauritius</strong>
                <p>Jackaria Road, Les Pailles, Port Louis, MAURITIUS - 11205</p>
              </div>
              <div>
                <strong>United States</strong>
                <p>1786 Heritage Lane #2006, Sacramento, CA, USA - 95815</p>
              </div>
            </div>
          </div>

          {/* Right Div */}

          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <p className="mb-2">Company Name</p>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter Your Company Name"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <div>
                  <p className="mb-2">Target market for AI solutions</p>
                  <input
                    type="text"
                    name="targetMarket"
                    value={formData.targetMarket}
                    onChange={handleChange}
                    placeholder="Enter Your Target market details"
                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <div>
                  <p className="mb-2">Company Email-Address</p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email-Address"
                    className="w-full p-4 border border-gray-300 rounded-md text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-60 p-3 bg-[#904af2] text-white rounded-md"
                  style={{ borderRadius: "40px", fontSize: 19 }}
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;

