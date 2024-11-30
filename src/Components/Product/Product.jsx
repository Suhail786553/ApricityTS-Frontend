import { useState } from "react";
import { motion } from "framer-motion";
// import imgocr1 from '../Navbar/imgocr1.png';

const Product = () => {
  // Define the state to track the selected tab
  const [selectedTab, setSelectedTab] = useState("Any OCR Engine");

  // Data for different tabs
  const tabData = {
    "Any OCR Engine": {
      heading: "Any OCR Engine",
      description: "Ayn OCR is our Arabic OCR engine designed for precise data extraction from images and scanned PDFs with exceptional accuracy.",
      imageUrl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/out1-YZ9bEoQQWZSE2gvJ.jpg"
    },
    "Invoice Extractor": {
      heading: "Invoice Extractor",
      description: " Invoice Extractor leverages OCR and machine vision to accurately extract invoice data from scanned PDFs, powered by our Ayn OCR Engine.",
      imageUrl: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/1_gax3-sipo09bpdcz2fi_kw-mjE94oG5Z6T9Dk45.webp"
    },
    "ID Card Detail Extractor": {
      heading: "ID Card Detail Extractor",
      description: " ID Card Extractor uses advanced technology to accurately extract information from ID card images. Powered by our Ayn OCR engine.",
      imageUrl:"https://user-images.githubusercontent.com/47300390/160568107-0ac52940-797e-4a00-9702-610d8e4f305c.jpg"
    }
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="py-16 px-4 md:px-17 lg:px-24">
  {/* Section Heading */}
  <div className="mb-12">
    {/* <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-left">Our Products</h2> */}
    <h6 className="text-3xl md:text-3xl font-semibold mb-4 text-left">
      Accelerate business processes with our AI-driven solutions tailored<br /> for the UAE and Gulf regions.
    </h6>
  </div>

  {/* Tab Headings */}
  <div className="flex items-center space-x-4 text-lg md:text-xl mb-8">
  {Object.keys(tabData).map((tab) => (
    <button
      key={tab}
      onClick={() => handleTabClick(tab)}
      className={`pb-2 ${selectedTab === tab ? "text-purple-500 border-b-2 border-purple-500" : ""} text-left`}
    >
      {tab}
    </button>
  ))}
</div>


  {/* Tab Content */}
  <div className="flex flex-col md:flex-row items-start justify-between md:space-x-12">
    {/* Text and Button Section */}
    <div className="max-w-md text-left">
      <p className="text-lg md:text-xl mb-4">
        {tabData[selectedTab].description}
      </p>
      <a href="/result">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
          Try Now
        </button>
      </a>
    </div>

    {/* Image Section */}
    <motion.div
      className="max-w-md w-full md:w-1/2 mt-8 md:mt-0"
      style={{ marginRight: "1rem" }} // Adjust this value for exact spacing from the right corner
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        className="w-full object-cover rounded-lg"
        style={{ height: "30vh", borderRadius: "30px" }}
        src={tabData[selectedTab].imageUrl}
        alt={selectedTab}
      />
    </motion.div>
  </div>
</div>

      <div className="bg-white py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
          {/* Left Div (Image) */}
          <div className="w-full md:w-2/3 md:h-full ms:h-full">
            <img
              src="https://images.unsplash.com/photo-1710993011875-38d2f3ecf0be?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyOHx8YWklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzIzNDY0MDYyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=653"  // Replace with your image URL
              alt="Testimonial"
              className="w-full  object-cover"
              style={{height:"70vh"}}
            />
          </div>

          {/* Right Div (Content) */}
          <div
            className="w-full md:w-2/3 bg-[#904af2] text-white p-12 flex flex-col items-center justify-center"
            style={{ height: "70vh" }}
          >
            <div className="text-center">
              {/* 5 Stars */}
              <div className="mb-4 text-2xl">{"★ ★ ★ ★ ★"}</div>

              {/* Testimonial Text */}
              <p className="text-[18px] mb-8">
                Our Arabic OCR engine has revolutionized our workflow
                efficiency. Highly recommend it!
              </p>

              {/* Circular Image */}
              <div className="mt-8 flex justify-center">
                <img
                  className="w-28 h-28 rounded-full border-4 border-white"
                  src="https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxhaSUyMHNvbHV0aW9uc3xlbnwwfHx8fDE3MjM0NjQwNjJ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48"
                  alt="Happy Customer"
                />
              </div>

              {/* Happy Customer Text */}
              <p className="mt-4 font-noto text-[22px] text-black">
                Anas Al Mashari
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Product;
