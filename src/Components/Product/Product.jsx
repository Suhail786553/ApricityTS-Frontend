// import React from "react";
import { motion } from "framer-motion";
import imgocr1 from '../Navbar/imgocr1.png';

const Product = () => {
 

  return (
    <>
      <div>
        <div className="bg-black text-white py-16">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Products
            </h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Accelerate business processes with our AI-driven solutions
              tailored for the UAE and Gulf regions.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
  {/* Card 1 */}
  <motion.div
    className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm flex flex-col"
    style={{ minHeight: "400px" }}
    whileHover={{ scale: 1.05, rotate: 3 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <a href="/result" className="flex flex-col h-full">
      <img
        className="w-full h-40 object-cover"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/out1-YZ9bEoQQWZSE2gvJ.jpg"
        alt="Product 1"
      />
      <div className="p-6 my-8 flex-grow"> {/* Increased padding here */}
        <strong className="text-xl mb-2 block">Ayn OCR Engine</strong>
        <p className="text-base line-clamp-3">
          Ayn OCR is our Arabic OCR engine designed for precise data extraction from images and scanned PDFs with exceptional accuracy.
        </p>
      </div>
    </a>
  </motion.div>

  {/* Card 2 */}
  <motion.div
    className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm flex flex-col"
    style={{ minHeight: "400px" }}
    whileHover={{ scale: 1.05, rotate: 3 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <a href="/result" className="flex flex-col h-full">
      <img
        className="w-full h-40 object-cover"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/1_gax3-sipo09bpdcz2fi_kw-mjE94oG5Z6T9Dk45.webp"
        alt="Product 2"
      />
      <div className="p-6 my-8 flex-grow"> {/* Increased padding here */}
        <strong className="text-xl mb-2 block">Invoice Extractor</strong>
        <p className="text-base line-clamp-3">
          Invoice Extractor leverages OCR and machine vision to accurately extract invoice data from scanned PDFs, powered by our Ayn OCR Engine.
        </p>
      </div>
    </a>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm flex flex-col"
    style={{ minHeight: "400px" }}
    whileHover={{ scale: 1.05, rotate: 3 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <a href="/result"  className="flex flex-col h-full">
      <img
        className="w-full h-40 object-cover"
        src={imgocr1}
        alt="Product 3"
      />
      <div className="p-6 my-8 flex-grow"> {/* Increased padding here */}
        <strong className="text-xl mb-2 block">ID Card Detail Extractor</strong>
        <p className="text-base line-clamp-3">
          ID Card Extractor uses advanced technology to accurately extract information from ID card images. Powered by our Ayn OCR engine.
        </p>
      </div>
    </a>
  </motion.div>
</div>

        </div>
      </div>
      <div className="bg-white py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
          {/* Left Div (Image) */}
          <div className="w-full md:w-2/3 md:h-full ms:h-full">
            <img
              src="https://images.unsplash.com/photo-1710993011875-38d2f3ecf0be?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyOHx8YWklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzIzNDY0MDYyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=653" // Replace with your image URL
              alt="Testimonial"
              className="w-full h-full object-cover"
              style={{ height: "70vh" }}
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
