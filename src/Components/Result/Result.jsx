import  { useEffect, useState } from 'react';
import { FaFileAlt, FaCog, FaChartBar, FaChartLine } from 'react-icons/fa'; 

const IndustriesSection = () => {
  const industries = [
    {
      title: "Financial Services",
      description: ["Credit Unions", "Insurance Companies"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v8m-6-4h12m-6 0a2 2 0 10-4 0 2 2 0 004 0zm2 0h4m-6 0h2a2 2 0 110 4"
          />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      description: ["Hospitals and Clinics", "Pharmaceutical Companies"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 "
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12v2a1 1 0 001 1h4a1 1 0 001-1v-2m-2-2V9a2 2 0 10-4 0v1m6 4a2 2 0 11-4 0"
          />
        </svg>
      ),
    },
    {
      title: "Government Agencies",
      description: ["Public Sector Organizations", "Immigration Departments"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 "
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m4-8H8"
          />
        </svg>
      ),
    },
    {
      title: "Legal Services",
      description: ["Law Firms", "Corporate Legal Departments"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v8m-4-4h8"
          />
        </svg>
      ),
    },
    {
      title: "Retail and E-Commerce",
      description: ["Retailers", "E-Commerce Platforms"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 6h13v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6h3z"
          />
        </svg>
      ),
    },
    {
      title: "Education",
      description: ["Academic Institutions", "Research Organizations"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20v2m-4-2v2m8-2v2M8 10V7a3 3 0 016 0v3m-8 4v4m2-4v4"
          />
        </svg>
      ),
    },
    {
      title: "Telecommunications",
      description: ["Service Providers", "Network Operators"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          style={{color:"#904AF2"}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 2v20m4-20v20M7 8l5-5 5 5M7 16l5 5 5-5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-center text-5xl font-extrabold text-gray-900 leading-tight">
        Which Industries Can Benefit from <br></br>ApricityTS AI-powered Efficiency?
      </h2>
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {industries.map((industry, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div>{industry.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{industry.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              {industry.description.map((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-6 md:p-12 gap-8" style={{ backgroundColor: '#904AF2' }}>
      
      {/* First Row: Section 1 and Section 2 */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Section 1: Advanced Text Extraction */}
        <div className="flex flex-col items-center md:w-1/2 text-center md:text-left text-white">
          <div className="flex flex-col items-center md:items-start">
            <FaFileAlt size={50} style={{ color: '#C4F015' }} /> {/* Change to white for better contrast */}
            <h3 className="text-2xl md:text-3xl font-bold mt-4" style={{ color: "#FFFFFF" }}>
              Advanced Text Extraction
            </h3>
            <p className="text-gray-200 mt-4 max-w-md">
              Conversion of images to text is handled by finely tuned AI to give you superior accuracy and speed in your automated extractions. Multilingual support steps in to give you even more scope for usage.
            </p>
            <a
              href="#"
              className="mt-6 border-2 border-lime-400 text-lime-400 py-2 px-4 rounded-full font-bold hover:bg-lime-400 hover:text-white transition duration-300"
            >
              Explore the power of AI in your workflows
            </a>
          </div>
        </div>

        {/* Section 2: Dynamic Document Understanding */}
        <div className="flex flex-col items-center md:w-1/2 text-center md:text-left text-white">
          <div className="flex flex-col items-center md:items-start">
            <FaCog size={50} style={{ color: '#C4F015' }} /> {/* Use bright green for visibility */}
            <h3 className="text-2xl md:text-3xl font-bold mt-4" style={{ color: "#FFFFFF" }}>
              Dynamic Document Understanding
            </h3>
            <p className="text-gray-200 mt-4 max-w-md">
              Versatility is at the core of our AI extraction capabilities. It recognizes and processes even the most complex characters at speed and at scale, adapting to layouts and formats to become more accurate over time.
            </p>
            <a
              href="#"
              className="mt-6 border-2 border-lime-400 text-lime-400 py-2 px-4 rounded-full font-bold hover:bg-lime-400 hover:text-white transition duration-300"
            >
              Get reliable data handling you can trust
            </a>
          </div>
        </div>
      </div>

      {/* Second Row: Section 3 and Section 4 */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Section 3: Top Tier Analytics */}
        <div className="flex flex-col items-center md:w-1/2 text-center md:text-left text-white">
          <div className="flex flex-col items-center md:items-start">
            <FaChartBar size={50} style={{ color: '#C4F015' }} /> {/* Match icon color */}
            <h3 className="text-2xl md:text-3xl font-bold mt-4" style={{ color: "#FFFFFF" }}>
              Top Tier Analytics
            </h3>
            <p className="text-gray-200 mt-4 max-w-md">
              Every extraction holds the potential for insights that drive growth. Unlock new efficiencies with deep reporting that facilitate better decision-making and performance monitoring.
            </p>
            <a
              href="#"
              className="mt-6 border-2 border-lime-400 text-lime-400 py-2 px-4 rounded-full font-bold hover:bg-lime-400 hover:text-white transition duration-300"
            >
              Generate improved business intelligence
            </a>
          </div>
        </div>

        {/* Section 4: Scales with Your Success */}
        <div className="flex flex-col items-center md:w-1/2 text-center md:text-left text-white">
          <div className="flex flex-col items-center md:items-start">
            <FaChartLine size={50} style={{ color: '#C4F015' }} />
            <h3 className="text-2xl md:text-3xl font-bold mt-4" style={{ color: "#FFFFFF" }}>
              Scales with Your Success
            </h3>
            <p className="text-gray-200 mt-4 max-w-md">
              Cloud and on-premise support give you deployment options that make sense to your enterprise. High volume processing with no drop off in accuracy means consistent quality in extractions.
            </p>
            <a
              href="#"
              className="mt-6 border-2 border-lime-400 text-lime-400 py-2 px-4 rounded-full font-bold hover:bg-lime-400 hover:text-white transition duration-300"
            >
              Let ApricityTS grow with your enterprise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const FinalProduct = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-start justify-center min-h-screen p-6 md:p-12 gap-8"> {/* Change 'items-center' to 'items-start' */}
      {/* Image and Call-to-Action Section */}
      <div className="flex flex-col items-center md:w-10/12 gap-4">
        <img
          src="https://cdn.veryfi.com/wp-content/uploads/what-is-ocr.jpg"
          alt="Team Working"
          className="rounded-xl w-11/12 md:w-8/12 h-auto" // Set width to 75% on mobile and 50% on larger screens
        />
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-center" style={{ color: "#904AF2" }}>
            The Final Product
          </h3>
          <div className="flex justify-center mt-4">
            <button
              className="hover:bg-blue-700 hover:border-black border-2 border-transparent text-white py-2 px-6 rounded-full transition duration-300"
              style={{ backgroundColor: "#904AF2" }}
            >
              Speed up and simplify your data management
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="md:w-1/2 flex flex-col justify-start gap-3 text-center md:text-left"> {/* Change 'justify-center' to 'justify-start' */}
        <ul className="space-y-2">
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">High-precision text extraction from images</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">Real-time validation</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">Robust extraction in Arabic and English</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">Data management platform integration</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">Detailed reporting</span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2 text-green-600">
            <span className="text-xl">✔</span>
            <span className="text-gray-800">End-to-end encrypted</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const WhatItCanDo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('what-it-can-do');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setTimeout(() => {
            setIsVisible(true);
          }, 1000); // 2 seconds delay
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="what-it-can-do" className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6 md:p-12">
      <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl md:text-4xl font-bold text-black-800 mb-4">
          What it can do?
        </h2>
        <p className="text-gray-600 text-xl md:text-xl max-w-3xl mx-auto overflow-hidden text-ellipsis line-clamp-3">
          AI-powered deep learning converts images into editable text rapidly and accurately. Handle large volumes of text extraction from scanned documents, photos, and screenshots with high precision, in Arabic and English. Integrate contextual understanding into your workflows and drive faster processing and insights.
        </p>
        <div className="flex flex-wrap justify-center mt-6 gap-8">
          {['JPG', 'JPEG', 'PNG', 'BMP', 'TIF', 'TIFF', 'GIF', 'PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'ZIP'].map((format) => (
            <span key={format} className="text-black-800 font-semibold text-lg">
              {format}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="mt-8 inline-block font-bold hover:bg-blue-800 hover:border-black border-2 border-transparent text-white py-3 px-6 rounded-full transition duration-300" style={{backgroundColor:"#904AF2",height:"7vh"}}
        >
          Unlock the data within your images
        </a>
        <a
          href="/tryfree"
          className="mt-8 inline-block font-bold m-20 hover:bg-blue-800 hover:border-black border-2 border-transparent text-white py-3 px-6 rounded-full transition duration-300" style={{backgroundColor:"#904AF2",height:"7vh"}}
        >
        Try Free
        </a>
      </div>
    </div>
  );
};


const ArabicOCRBanner = () => {
  return (
    <>
      <div className=" min-h-screen flex justify-center items-center"style={{
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/04/10/19/49/ai-generated-7914562_1280.jpg")', // Replace with your image URL
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the background image
  }}>
        <div
          className="p-8 rounded-3xl text-center max-w-6xl flex flex-col justify-center items-center"
          style={{ height: "70vh", padding: "20px", backgroundColor:"" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8"style={{color:"#904AF2"}}>
            Discover paperless productivity with Arabic OCR image <br /> to text extraction
          </h2>
          <p className="mt-4  mb-6" style={{ fontSize: "18px",color:"white" }}>
            Experience top-tier data extraction from images or PDFs, powered by ApricityTS’s cutting-edge technology. Our AI-driven solutions ensure unmatched accuracy, transforming documents into actionable insights while reducing manual effort.
          </p>
          <p className="font-bold text-black-800 mb-8" style={{ fontSize: "20px", color:"white"}}>
            Automate your quest for digitized efficiency
          </p>
          <a
            href="#"
            className="font-bold hover:bg-blue-700 hover:border-white border-2 border-transparent text-white py-3 px-4 rounded-lg transition duration-300 md:h-7vh w-13vw" style={{backgroundColor:"#904AF2",borderRadius:"25px"}}
          >
            Contact us
          </a>
        </div>
      </div>
      <WhatItCanDo />
      <FinalProduct/>
      <Features/>
      <IndustriesSection/>
    </>
  );
};

export default ArabicOCRBanner;
