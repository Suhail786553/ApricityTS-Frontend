import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import backgroundVideo from "../About/vid.mp4";
// import imgocr1 from '../Navbar/imgocr1.png';
// import animimg from '../About/anim.jpeg';
import './Home.css';
import { motion } from "framer-motion";

const Hero = () => {
  const [count50, setCount50] = useState(0);
  const [count15, setCount15] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
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
  // const handleInput=()=>{
  //   alert("coming soon");
  // }
  const [selectedTab, setSelectedTab] = useState("Any OCR Engine");
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
      imageUrl: "https://user-images.githubusercontent.com/47300390/160568107-0ac52940-797e-4a00-9702-610d8e4f305c.jpg"
    }
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      {/* section1 */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-purple-500 to-indigo-700 overflow-hidden">
      {/* Left Content */}
      <div className="z-10 max-w-4xl text-center md:text-left px-6 py-6 md:px-12 lg:px-24">
        {/* Tagline */}
        <div className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full mb-6">
          <span className="font-semibold tracking-wider uppercase">
            AI Services
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Powering the Future with{" "}
          <span className="text-blue-300">AI Innovations</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Apricity AI provides cutting-edge solutions, including OCR, predictive
          analytics, generative AI, and more. Empower your business with safe,
          ethical, and scalable AI technologies.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#services"
          className="inline-block bg-blue-400 hover:bg-blue-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg"
        >
          Explore Services
        </a>
      </div>

      {/* Right Content: Binary Animation */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
        {/* Binary Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="animate-fadeIn text-green-200/80 text-xs sm:text-sm md:text-base leading-tight binary-animation">
            {Array(500)
              .fill("01101010 110110 00101010 101010")
              .join(" ")}
          </div>
        </div>

        {/* Silhouette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30"></div>

        {/* Centerpiece */}
        <div className="relative z-10">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-700 rounded-full h-40 w-40 md:h-60 md:w-60"></div>
        </div>
      </div>
    </section>
    {/* section2 */}
   
        {/* Lower Section with Hand Image */}
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
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-100 text-white py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://aindo.com/assets/pexels-thisisengineering.5adac666_2ctXot.webp" // Replace with your background image URL
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <p className="uppercase text-sm tracking-widest text-white-300 mb-4">
          Revolutionizing AI-Powered Solutions
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Empower Your Business with{' '}<br></br>
          <span className="text-purple-600">AI-Driven Insights</span>
        </h1>
        <p className="text-white-300 text-lg lg:text-xl mb-8">
          At ApricityTS, we provide cutting-edge AI solutions that are fully
          scalable, secure, and designed<br/> to transform your business with
          responsibility and excellence.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a href="/result"><button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
           Try Now
          </button></a>
          <button className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>


      {/* The rest of your component */}



      {/* Cards */}
      <div className="py-16 px-4 md:px-17 lg:px-24">
        {/* Section Heading */}
        <div className="mb-12">
          {/* <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-left">Our Products</h2> */}
          <h6 className="text-xl md:text-3xl font-semibold mb-4 text-left">
            Accelerate business processes with our AI-driven solutions tailored<br /> for the UAE and Gulf regions.
          </h6>
        </div>

        {/* Tab Headings */}
        <div className="flex items-center space-x-4 text-lg md:text-lg mb-8">
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
      <section className="bg-[rgb(13,27,43)] text-white py-12 px-8 md:flex md:justify-between">
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-[sans-serif noto-sans] font-semibold">
            Predict the future by creating it
          </h1>
          <p className="text-[16px] md:text-[18px] mt-4">
            You didn’t come this far to stop
          </p>
          <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
            <button className="bg-[#176BE0] text-white py-2 px-4 md:w-1/4 h-12 rounded-full cursor-pointer">
              Create it
            </button>
            <a
              href="https://www.instagram.com/"
              className="text-white-800 hover:text-white-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "20px", marginTop: "4px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="text-white-800 hover:text-white-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "20px", marginTop: "4px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:someone@example.com"
              className="text-white-800 hover:text-white-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "20px", marginTop: "4px" }}
            >
              <MdOutlineEmail />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-row space-x-4 mt-8 md:flex-row items-center md:space-x-4 mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=720&h=1367"
            alt="First"
            className="w-full md:w-1/2 h-[300px] md:h-[420px] rounded-lg cursor-pointer"
          />
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <img
              src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=720&h=656"
              alt="Second"
              className="w-full h-[140px] md:h-[200px] rounded-lg cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=720&h=656"
              alt="Third"
              className="w-full h-[140px] md:h-[200px] rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </section>
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
              {/* <div>
                <strong className="block text-[#1D1E20] text-[20px] font-sans mb-1">
                  Success
                </strong>
                <p className="text-[#56585E] text-[16px]">123 Main Street</p>
              </div> */}
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
      <div className="bg-gradient-to-br from-[#5A9BF3] via-[#B899F5] to-[#B899F5] py-16 px-8">
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
              className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 cursor-pointer flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
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
                  <h4 className="text-xl font-bold">Omar Khaled</h4>
                  {/* <p className="text-gray-600">CEO, Tech Company</p> */}
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 cursor-pointer flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
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
                  <h4 className="text-xl font-bold">Zainab Ali </h4>
                  {/* <p className="text-gray-600">COO, Finance Firm</p> */}
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-white text-black p-6 rounded-3xl shadow-lg w-full md:w-1/3 h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-80 cursor-pointer flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 
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
                  <h4 className="text-xl font-bold">Ahmed Salah </h4>
                  {/* <p className="text-gray-600">Marketing Manager, Retail Company</p> */}
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