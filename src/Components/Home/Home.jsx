import React from 'react';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://24.media.tumblr.com/bcb641dfcd087fdde2b877c3d9f31138/tumblr_mhyqumI6521rl9mjvo1_500.gif)',
      }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
        Accelerate Business <br></br>Processes with Smart <br></br>AI Solutions
      </h1>
      <h5 className="text-white text-sm md:text-base mb-6">
        Driving Efficiency and Innovation for Companies in the UAE and Gulf<br></br> Region
      </h5>
      <button className="text-white py-3 px-8 rounded-full text-lg  md:text-xl mb-6 hover:shadow-lg transition duration-300" style={{backgroundColor:"#904AF2"}}>
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
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    {/* Left Content */}
    <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
      <p className="text-black-700 text-base md:text-base leading-relaxed mb-8">
        We specialize in providing computer vision and generative AI solutions that can easily integrate with your existing services, improving the overall intelligence of your business operations. Our solutions are designed to be plug-and-play, making it simple for you to enhance the capabilities of your services without unnecessary complications. With our expertise in AI technology, we can help streamline your processes, improve efficiency, and provide valuable insights to drive your business forward. By leveraging our innovative solutions, you can stay ahead of the competition and meet the evolving needs of your customers. Let us help you unlock the full potential of your business with our cutting-edge AI solutions.
      </p>
      <p className="text-gray-600 text-lg md:text-base font-semibold mb-8">
        Empowering UAE Businesses with AI Solutions for Efficiency and Growth
      </p>
      <div className="flex justify-center md:justify-start items-center space-x-12">
        <div className="text-center">
          <p className="text-5xl font-bold" style={{color:"rgb(145, 76, 242)"}}>50+</p>
          <p className="text-gray-700 text-sm md:text-base mt-2">Trusted Partner</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold"style={{color:"rgb(145, 76, 242)"}}>15</p>
          <p className="text-gray-700 text-sm md:text-base mt-2">Leading AI Innovators</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="md:w-2/3 flex justify-center items-center">
      <img
        className="max-w-full h-65 rounded-xl shadow-md"
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=656&h=560"
        alt="AI Solutions" style={{width:"35vw"}}
      />
    </div>
  </div>
  <div className="bg-black text-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Our Products</h3>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Accelerate business processes with our AI-driven solutions tailored for the UAE and Gulf regions.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs h-90 md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/out1-YZ9bEoQQWZSE2gvJ.jpg"
            alt="Product 1"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">Ayn OCR Engine</strong>
            <p>
            Ayn OCR is our Arabic OCR engine designed for precise data extraction from images and scanned PDFs with excep
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/1_gax3-sipo09bpdcz2fi_kw-mjE94oG5Z6T9Dk45.webp"
            alt="Product 2"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">Invoice Extractor</strong>
            <p>
            Invoice Extractor leverages OCR and machine vision to accurately extract invoice data from scanned PDFs, powered by our Ayn OCR Engine
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/pvbwn-AGB4zEzjr1FVVr0a.jpg"
            alt="Product 3"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">ID Card Detail Extractor</strong>
            <p>
            ID Card Extractor uses advanced technology to accurately extract information from ID card images. Powered By our Ayn OCR engine
            </p>
          </div>
        </div>
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
        The Arabic OCR engine from Apricityts has revolutionized our document processing. It's accurate, efficient, and a game-changer for our business.
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
          <h3 className="text-[#1D1E20] text-[50px] font-serif mb-4 font-medium">AI Solutions</h3>
          <p className="text-[#56585E] text-[16px] mb-8 max-w-3xl">
            Accelerating business processes with smart AI-driven solutions in UAE, Dubai, and Gulf regions.
          </p>
          <div className="space-y-4">
            <div>
              <strong className="block text-[#1D1E20] text-[20px] font-sans mb-1">Success</strong>
              <p className="text-[#56585E] text-[16px]">123 Main Street</p>
            </div>
            <div>
              <strong className="block text-[#1D1E20] text-[20px] font-sans mb-1">Hours</strong>
              <p className="text-[#56585E] text-[16px]">Mon-Fri 9am-5pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Map */}
      <div className="md:w-2/3 flex justify-center items-center">
        <iframe
          className="w-8/12 h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509839!2d144.95373531545092!3d-37.81627974202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4cbdbab%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1619454985881!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  </>
  );
};

export default Hero;
