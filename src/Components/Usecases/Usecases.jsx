// import React from "react";
import Slider from "react-slick";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AiSolutionsSection = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const useCases = [
    {
      title: "1. Automated Document Processing",
      description:
        "Streamline digitization of Arabic-language documents, including invoices and ID cards, improving record-keeping.",
    },
    {
      title: "2. Efficient Accounts Payable",
      description:
        "Use Invoice Extractor to automate data extraction from invoices, reducing manual entry.",
    },
    {
      title: "3. Enhanced Customer Onboarding",
      description:
        "Accelerate onboarding by using ID Card Extractor to extract information from personal documents quickly.",
    },
    {
      title: "4. Improved Financial Reporting",
      description:
        "Digitize financial documents to ensure accurate financial reporting with Invoice Extractor.",
    },
    {
      title: "5. Content Digitization",
      description:
        "Digitize and index Arabic-language books and documents using Ayn OCR, making them accessible.",
    },
    {
      title: "6. Compliance and Auditing",
      description:
        "Extract data from invoices and ID cards to ensure compliance and facilitate auditing processes.",
    },
    {
      title: "7. Efficient Expense Management",
      description:
        "Automate invoice data extraction to track expenses, improving financial oversight.",
    },
    {
      title: "8. Integrated ERP Systems",
      description:
        "Seamlessly integrate extracted data from invoices and ID cards with ERP systems for better workflows.",
    },
    {
      title: "9. Customer Verification",
      description:
        "Use ID Card Extractor for quick identity verification in sectors such as finance and telecom.",
    },
    {
      title: "10. Contract and Legal Document Analysis",
      description:
        "Extract and analyze data from Arabic-language contracts to streamline compliance checks.",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full mb-8">
          <span className="block text-[48px] font-[Noto-sans] font-sans-serif text-[#1D1E20] font-bold">
            AI Solutions
          </span>
          <p className="mt-4 text-lg text-[#1D1E20]">
            Explore real-world applications and success stories of our AI
            products.
          </p>
        </div>
        <div className="w-full flex justify-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=984&h=347"
            alt="AI Solutions"
            className="w-[900px] h-[320px] object-cover max-w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="mb-12">
        <div className="w-full max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {useCases.map((useCase, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center border border-gray-300">
                  <h3 className="text-lg font-bold text-[#1D1E20] mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-[#1D1E20]">{useCase.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[rgb(13,27,43)] text-white py-12 px-8 md:flex md:justify-between">
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-[48px] md:text-[64px] font-[sans-serif noto-sans] font-semibold">
            Predict the future by creating it
          </h1>
          <p className="text-[16px] md:text-[18px] mt-4">
            You didn’t come this far to stop
          </p>
          <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
            <button className="bg-[#176BE0] text-white py-2 px-4 md:w-1/4 h-12 rounded-full">
              Create it
            </button>
            <a
              href="https://www.instagram.com/"
              className="text-white-800 hover:text-white-500"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "20px", marginTop: "4px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              className="text-white-800 hover:text-white-500"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "20px", marginTop: "4px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:someone@example.com"
              className="text-white-800 hover:text-white-500"
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
            className="w-full md:w-1/2 h-[300px] md:h-[420px] rounded-lg"
          />
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <img
              src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=720&h=656"
              alt="Second"
              className="w-full h-[140px] md:h-[200px] rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=720&h=656"
              alt="Third"
              className="w-full h-[140px] md:h-[200px] rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AiSolutionsSection;
