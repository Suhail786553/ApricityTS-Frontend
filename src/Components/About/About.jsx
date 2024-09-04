import React from "react";

const Section = () => {
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
            className="flex flex-col-reverse md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8"
            style={{ marginTop: "-45px" }}
          >
            {/* Left Div (Image) */}
            <div className="w-full h-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&h=738" // Replace with your image URL
                alt="AI Solutions"
                className="w-full h-auto rounded-lg object-cover"
                style={{ height: "70vh" }}
              />
            </div>

            {/* Right Div (Text Content) */}
            <div className="w-full md:w-1/2 py-4 md:py-0">
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
                innovative solutions and become a catalyst for your business's
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
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
              <div>
                <strong>Banglore</strong>
                <p>
                  1st Cross Kankanagar Opp. Manyata Tech Park, Hebbal,<br></br>{" "}
                  Bangalore, INDIA - 560045
                </p>
              </div>
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
            <div className="space-y-6">
              <div>
                <p className="mb-2">
                  Company Name{" "}
                  {/* <span className="text-red-600">*</span> */}
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                />
              </div>
              <div>
                <p className="mb-2">
                  Target market for AI solutions{" "}
                  <span className="text-red-600">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Target market details"
                  className="w-full p-3 border border-gray-300 rounded-md text-black"
                />
              </div>
              <div>
                <p className="mb-2">
                 Company Email-Address{" "}
                  <span className="text-red-600">*</span>
                </p>
                <input
                  type="email"
                  placeholder="Enter Email-Address"
                  className="w-full p-4 border border-gray-300 rounded-md text-black"
                />
              </div>
              <button
                type="submit"
                className="w-60 p-3 bg-[#904af2] text-white rounded-md"
                style={{ borderRadius: "40px" }}
              >
                Submit Form Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
