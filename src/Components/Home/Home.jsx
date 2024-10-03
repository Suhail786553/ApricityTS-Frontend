import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import backgroundVideo from "../About/vid.mp4";
import imgocr1 from '../Navbar/imgocr1.png';
import { motion } from "framer-motion";
// import './Home.css';

const Hero = () => {
  const [count50, setCount50] = useState(0);
  const [count15, setCount15] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const handleClick = () => {
    alert("Coming Soon");
  };
  useEffect(() => {
    if (inView) {
      const interval50 = setInterval(() => {
        setCount50((prevCount) => (prevCount < 50 ? prevCount + 1 : 50));
      }, 30);

      const interval15 = setInterval(() => {
        setCount15((prevCount) => (prevCount < 15 ? prevCount + 1 : 15));
      }, 100);

      return () => {
        clearInterval(interval50);
        clearInterval(interval15);
      };
    }
  }, [inView]);

  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center text-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="path-to-poster-image.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1' // This ensures the video stays in the background
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-1">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Accelerate Business <br /> Processes with Smart <br /> AI Solutions
          </h1>
          <h5 className="text-white text-sm md:text-base mb-6">
            Driving Efficiency and Innovation for Companies in the UAE and Gulf
            <br /> Region
          </h5>
          <button
            className="text-white py-3 px-8 rounded-full text-lg md:text-xl mb-6 hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "#904AF2" }}
          >
            Learn
          </button>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-white text-sm md:text-base" />
            ))}
          </div>
          <h4 className="text-white text-sm md:text-base font-semibold">
            Leading the Way in AI Technology
          </h4>
        </div>
      </div>

      <div
  ref={ref}
  className="flex flex-col md:flex-row justify-center items-center md:items-stretch md:justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
>
  {/* Left Content */}
  <div className="md:w-1/2 flex-grow mb-12 md:mb-0 text-center md:text-left flex flex-col justify-between">
    <p className="text-black-700 text-base leading-relaxed mb-8">
      We specialize in providing computer vision and generative AI solutions
      that can easily integrate with your existing services, improving the
      overall intelligence of your business operations. Our solutions are
      designed to be plug-and-play, making it simple for you to enhance the
      capabilities of your services without unnecessary complications. With our
      expertise in AI technology, we can help streamline your processes,
      improve efficiency,and provide valuable insights to drive your business
      forward. By leveraging our innovative solutions, you can stay ahead of
      the competition and meet the evolving needs of your customers. Let us
      help you unlock the full potential of your business with our  cutting<br></br>-edge
      AI solutions.
    </p>
    <p className="text-gray-600 text-lg font-semibold mb-8">
      Empowering UAE Businesses with AI Solutions for Efficiency and Growth
    </p>
    <div className="flex justify-center md:justify-start items-center space-x-12">
      <div className="text-center">
        <p
          className="text-5xl font-bold"
          style={{ color: "rgb(145, 76, 242)" }}
        >
          {count50}+ 
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Trusted Partner
        </p>
      </div>
      <div className="text-center">
        <p
          className="text-5xl font-bold"
          style={{ color: "rgb(145, 76, 242)" }}
        >
          {count15}
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2">
          Leading AI Innovators
        </p>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="image md:w-2/5 w-full flex-grow flex justify-center items-center">
    <img
      className="w-full h-full object-cover rounded-xl shadow-md"
      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=656&h=560"
      alt="AI Solutions"
    />
  </div>
</div>



      {/* The rest of your component */}

      <div className="bg-black text-white py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Products
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Accelerate business processes with our AI-driven solutions tailored
            for the UAE and Gulf regions.
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
    <a href="#" onClick={handleClick} className="flex flex-col h-full">
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
    <a href="#" onClick={handleClick} className="flex flex-col h-full">
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
    <a href="#" onClick={handleClick} className="flex flex-col h-full">
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
      <div className="bg-[#904AF2] text-white py-16 px-4 text-center">
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-white text-sm" />
          ))}
        </div>

        {/* Testimonial Content */}
        <p className="font-noto text-[20px] max-w-2xl mx-auto leading-relaxed">
          The Arabic OCR engine from Apricityts has revolutionized our document
          processing. Its accurate, efficient, and a game-changer for our
          business.
        </p>

        {/* Customer Image */}
        <div className="mt-8 flex justify-center">
          <img
            className="w-24 h-24 rounded-full border-0 border-black"
            src="https://images.unsplash.com/photo-1710993011836-108ba89ebe51?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOXx8YWklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzIzNDY0MDYyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48"
            alt="Happy Customer"
          />
        </div>

        {/* Happy Customer Text */}
        <p className="mt-4 font-noto text-[20px]">Happy Customer</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-16 px-4 bg-white">
        {/* Left Content */}
        <div className="md:w-1/3 px-12 flex justify-center items-center mb-12 md:mb-0">
          <div className="text-left">
            <h3 className="text-[#1D1E20] text-[50px] font-serif mb-4 font-medium">
              AI Solutions
            </h3>
            <p className="text-[#56585E] text-[16px] mb-8 max-w-3xl">
              Accelerating business processes with smart AI-driven solutions in
              UAE, Dubai, and Gulf regions.
            </p>
            <div className="space-y-4">
              <div>
                <strong className="block text-[#1D1E20] text-[20px] font-sans mb-1">
                  Success
                </strong>
                <p className="text-[#56585E] text-[16px]">123 Main Street</p>
              </div>
              <div>
                <strong className="block text-[#1D1E20] text-[20px] font-sans mb-1">
                  Hours
                </strong>
                <p className="text-[#56585E] text-[16px]">Mon-Fri 9am-5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div className=" sm:w-11/12 md:w-2/3 flex justify-center items-center">
          <iframe
            className="w-8/12 h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.86062327462!2d80.85467682443611!3d26.836530458296963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe5d323b520b%3A0x2f011730d8522686!2sRajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725468455650!5m2!1sen!2sin"></iframe>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#176BE0] via-[#904AF2] to-[#904AF2] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-white text-lg">See how our solutions are transforming businesses in the UAE and beyond</p>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
  {/* Testimonial 1 */}
  <motion.div
    className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
    h-[calc(20rem)] md:h-[28rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[20rem] sm:h-[25rem] md:sm:h-[25rem] lg:sm:h-[25rem] xl:sm:h-[25rem] 2xl:sm:h-[25rem]"
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#904AF2] text-lg" />
        ))}
      </div>
      <p className="text-gray-800 text-lg italic mb-2 leading-relaxed">
        The Arabic OCR engine from Apricityts has revolutionized our document processing. Its accurate, efficient, and a game-changer for our business.
      </p>
    </div>
    <div className="flex items-center justify-center space-x-4 mt-2">
      <img
        className="w-16 h-16 rounded-full border-2 border-[#904AF2]"
        src="https://images.unsplash.com/photo-1710993011836-108ba89ebe51?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOXx8YWklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzIzNDY0MDYyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48"
        alt="Customer 1"
      />
      <div>
        <h4 className="text-xl font-bold">John Doe</h4>
        <p className="text-gray-600">CEO, Tech Company</p>
      </div>
    </div>
  </motion.div>

  {/* Testimonial 2 */}
  <motion.div
    className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
    h-[calc(20rem)] md:h-[28rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[20rem] sm:h-[25rem] md:sm:h-[25rem] lg:sm:h-[25rem] xl:sm:h-[25rem] 2xl:sm:h-[25rem]"
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#904AF2] text-lg" />
        ))}
      </div>
      <p className="text-gray-800 text-lg italic mb-2 leading-relaxed">
        Our company has been using the OCR solutions by Apricityts for months now, and the efficiency boost is remarkable.
      </p>
    </div>
    <div className="flex items-center justify-center space-x-4 mt-2">
      <img
        className="w-16 h-16 rounded-full border-2 border-[#904AF2]"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxjbGVhbnxlbnwwfHx8fDE3MjM0NjQwNjJ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
        alt="Customer 2"
      />
      <div>
        <h4 className="text-xl font-bold">Jane Smith</h4>
        <p className="text-gray-600">COO, Finance Firm</p>
      </div>
    </div>
  </motion.div>

  {/* Testimonial 3 */}
  <motion.div
    className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
    h-[calc(20rem)] md:h-[28rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[20rem] sm:h-[25rem] md:sm:h-[25rem] lg:sm:h-[25rem] xl:sm:h-[25rem] 2xl:sm:h-[25rem]"
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#904AF2] text-lg" />
        ))}
      </div>
      <p className="text-gray-800 text-lg italic mb-2 leading-relaxed">
        The integration process was seamless, and the customer support has been fantastic.
      </p>
    </div>
    <div className="flex items-center justify-center space-x-4 mt-2">
      <img
        className="w-16 h-16 rounded-full border-2 border-[#904AF2]"
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxOXx8dGVhbXxlbnwwfHx8fDE3MjM0NjQwNjJ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
        alt="Customer 3"
      />
      <div>
        <h4 className="text-xl font-bold">Emily White</h4>
        <p className="text-gray-600">Marketing Manager, Retail Company</p>
      </div>
    </div>
  </motion.div>
</div>

        </div>
      </div>
    </>
  );
};

export default Hero;